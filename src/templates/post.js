import React from 'react'
import RichText from '../components/RichTextCustom'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'
import styled from 'styled-components'

export default function Post({ pageContext }) {
  const { post } = pageContext

  return (
    <Layout>
      <PostWrapper>
        <div>
          <RichText render={post.data.title.raw} />
          <small>{post.data.post_date}</small>
        </div>
        <SliceZone body={post.data.body} />
      </PostWrapper>
    </Layout>
  )
}

const PostWrapper = styled.section`
  max-width: 800px;
  margin: 86px auto;
  padding: 20px;
`
