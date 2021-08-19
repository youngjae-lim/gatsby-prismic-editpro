import React from 'react'
import RichText from '../components/RichTextCustom'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'
import styled from 'styled-components'

export default function Page({ pageContext }) {
  const { page } = pageContext

  return (
    <Layout>
      <PageWrapper>
        <RichText render={page.data.page_title.raw} />
        <RichText render={page.data.content.raw} />
        <SliceZone body={page.data.body} />
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.section`
  max-width: 800px;
  margin: 20px auto;
`
