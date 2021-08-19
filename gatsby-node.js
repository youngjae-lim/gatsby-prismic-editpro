// import path from 'path'
const path = require('path')

async function makePages({ graphql, actions }) {
  // 1. Get a template for this page
  const pageTemplate = path.resolve('./src/templates/page.js')

  // 2. Query all pages
  const { data } = await graphql(`
    query {
      pages: allPrismicPage {
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

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([makePages(params)])
}
