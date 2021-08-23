import React from 'react'
import RichText from '../components/RichTextCustom'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Pagination from '../components/Pagination'
import PostCard from '../components/PostCard'

export default function Blog({ data, pageContext }) {
  const posts = data.posts.nodes
  console.log(posts)
  const { totalPages, currentPage } = pageContext
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <PageWrapper>
        <h1>Latest Blog Posts</h1>
        <CardGrid>
          {posts.map(post => (
            <div key={post.id}>
              <PostCard
                title={post.data.title.text}
                slug={post.uid}
                date={post.data.post_date}
                featuredImage={post.data.featured_image}
                excerpt={post.data.excerpt}
              />
            </div>
          ))}
        </CardGrid>
        <Pagination
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          prevPage={prevPage}
          nextPage={nextPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.section`
  max-width: 800px;
  margin: 86px auto;
  padding: 20px;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    posts: allPrismicPosts(skip: $skip, limit: $limit) {
      nodes {
        uid
        id
        data {
          title {
            html
            raw
            text
          }
          post_date(formatString: "MMMM DD, YYYY")
          excerpt {
            html
            raw
            text
          }
          featured_image {
            gatsbyImageData
          }
        }
      }
    }
  }
`
