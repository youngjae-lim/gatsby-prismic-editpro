// import path from 'path'
const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new NodePolyfillPlugin()],
  })
}

async function makePosts({ graphql, actions }) {
  // 1. Get a template for this post
  const postTemplate = path.resolve('./src/templates/post.js')
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // 2. Query all posts
  const { data } = await graphql(`
    query {
      posts: allPrismicPosts {
        totalCount
        nodes {
          id
          uid
          data {
            title {
              html
              raw
              text
            }
            post_date(formatString: "DD MMMM, YYYY")
            body {
              ... on PrismicPostsDataBodyText {
                id
                slice_type
                primary {
                  text_content {
                    html
                    raw
                    text
                  }
                }
              }
              ... on PrismicPostsDataBodyImageAndCaption {
                id
                slice_type
                primary {
                  image {
                    gatsbyImageData
                  }
                  image_caption
                }
              }
              ... on PrismicPostsDataBodyCode {
                id
                slice_type
                primary {
                  language
                  code_content {
                    html
                    raw
                    text
                  }
                }
              }
              ... on PrismicPostsDataBodyBlockQuote {
                id
                slice_type
                primary {
                  block_quote {
                    html
                    raw
                    text
                  }
                  cite {
                    html
                    raw
                    text
                  }
                }
              }
              ... on PrismicPostsDataBodyMarkdown {
                id
                slice_type
                primary {
                  markdown {
                    html
                    text
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Create paginated pages for posts
  const postsPerPage = 2
  const numPages = Math.ceil(data.posts.totalCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages: numPages,
        currentPage: i + 1,
      },
    })
  })

  // 3. Loop over each post and create it.
  data.posts.nodes.forEach(post => {
    actions.createPage({
      // What is the URL for this new post?
      path: `/post/${post.uid}`,
      component: postTemplate,
      context: {
        post: post,
      },
    })
  })
}

async function makePages({ graphql, actions }) {
  // 1. Get a template for this page
  const pageTemplate = path.resolve('./src/templates/page.js')

  // 2. Query all pages
  const { data } = await graphql(`
    query {
      pages: allPrismicPage(filter: { uid: { ne: "blog" } }) {
        nodes {
          uid
          id
          data {
            page_title {
              text
              raw
              html
            }
            content {
              text
              raw
              html
            }
            body {
              ... on PrismicPageDataBodyCallToActionGrid {
                id
                slice_type
                primary {
                  section_title {
                    html
                    raw
                    text
                  }
                }
                items {
                  a_call_to_action_title {
                    html
                    raw
                    text
                  }
                  content {
                    html
                    raw
                    text
                  }
                  button_label
                  button_destination {
                    uid
                  }
                  featured_image {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // 3. Loop over each page and create it.
  data.pages.nodes.forEach(page => {
    actions.createPage({
      // What is the URL for this new page?
      path: `/${page.uid}`,
      component: pageTemplate,
      context: {
        page: page,
      },
    })
  })
}

exports.createPages = async params => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([makePages(params), makePosts(params)])
}
