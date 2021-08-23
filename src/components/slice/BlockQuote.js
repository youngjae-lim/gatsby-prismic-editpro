import React from 'react'
import styled from 'styled-components'
import RichText from '../RichTextCustom'

export default function BlockQuote({ quote, cite }) {
  console.log('quote: ', quote)
  console.log('cite: ', cite)
  return (
    <BlockQuoteWrapper>
      <RichText render={quote.raw} />
      <RichText render={cite.raw} />
    </BlockQuoteWrapper>
  )
}

const BlockQuoteWrapper = styled.div`
  border-left: 7px solid skyblue;
  background: #ebebeb;
  padding: 20px 20px 5px;
  margin: 0px 40px 0px;
`
