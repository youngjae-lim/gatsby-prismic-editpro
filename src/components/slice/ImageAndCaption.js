import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export default function ImageAndCaption({ image, caption }) {
  console.log('image: ', image)
  console.log('caption: ', caption)
  return (
    <ImageCaptionWrapper>
      <GatsbyImage
        image={image.gatsbyImageData}
        layout='fullWidth'
        alt='featured image'
      />
      <p>{caption}</p>
    </ImageCaptionWrapper>
  )
}

const ImageCaptionWrapper = styled.div`
  padding: 20px;

  p {
    text-align: center;
  }
`
