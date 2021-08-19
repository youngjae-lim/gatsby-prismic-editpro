import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import RichText from './RichTextCustom'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function CallToActionGrid({ title, items }) {
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      {items.map((item, index) => (
        <CallToActionBlockWrapper key={`call-to-action-${index}`}>
          <RichText render={item.a_call_to_action_title.raw} />
          <div className='call-to-action-content-image'>
            <RichText render={item.content.raw} />
            <GatsbyImage
              image={item.featured_image.gatsbyImageData}
              layout='fullWidth'
              alt='featured image'
            />
          </div>
          <Button>
            <Link to={`/${item.button_destination.uid}`}>
              {item.button_label}
            </Link>
          </Button>
        </CallToActionBlockWrapper>
      ))}
    </CallToActionGridWrapper>
  )
}

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 20px auto;
`

const CallToActionBlockWrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
  background: #eee;
  border-radius: 20px;

  div.call-to-action-content-image {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`

const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;

  a {
    text-decoration: none;
    padding: 4px 8px;
    color: white;
    display: inline-block;
  }
`
