import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export default function PostCard({
  title,
  slug,
  date,
  featuredImage,
  excerpt,
}) {
  console.log(excerpt)
  console.log(featuredImage)
  return (
    <Card>
      {/* <GatsbyImage
          image={featuredImage.gatsbyImageData}
          layout='fullWidth'
          alt={`featured image for ${title}`}
        /> */}
      <h2>{title}</h2>
      <time>{date}</time>
      <p>{excerpt.text}</p>
      <Link className='card' to={`/post/${slug}`} title='View post'>
        Read More
      </Link>
    </Card>
  )
}

const Card = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  border: solid 1px #eee;
  padding: 15px;
  border-radius: 15px;
  margin: 1rem 0;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  transition: transform 500ms ease;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 20px;
    max-height: 100px;
    -webkit-line-clamp: 8; /* Write the number of
                              lines you want to be
                              displayed */
    -webkit-box-orient: vertical;
  }

  &:hover {
    transform: scale(1.03);
  }
`
