import React from 'react'
import styled from 'styled-components'
import RichText from './RichTextCustom'

export default function Hero({ title, content, image }) {
  return (
    <HeroWrapper image={image}>
      <div>
        <RichText render={title.raw} />
        <p>{content}</p>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  background: url('${props => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 66px);
  display: flex;
  align-items: center;
  text-align: center;
  color: white;

  div {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
  }
`
