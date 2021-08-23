import React from 'react'
import Hero from './slice/Hero'
import CallToActionGrid from './slice/CallToActionGrid'
import PriceList from './slice/PriceList'
import Text from './slice/Text'
import Code from './slice/Code'
import ImageAndCaption from './slice/ImageAndCaption'
import BlockQuote from './slice/BlockQuote'
import Markdown from './slice/Markdown'

export default function SliceZone({ body }) {
  console.log('body: ', body)
  return (
    <div>
      {body.map(bodyContent => {
        if (bodyContent.slice_type === 'hero') {
          return (
            <Hero
              key={bodyContent.id}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              image={bodyContent.primary.background_image.url}
            />
          )
        } else if (bodyContent.slice_type === 'call_to_action_grid') {
          return (
            <CallToActionGrid
              key={bodyContent.id}
              title={bodyContent.primary.section_title.raw}
              items={bodyContent.items}
            />
          )
        } else if (bodyContent.slice_type === 'price_list') {
          return (
            <PriceList
              key={bodyContent.id}
              title={bodyContent.primary.title.raw}
              items={bodyContent.items}
            />
          )
        } else if (bodyContent.slice_type === 'text') {
          return (
            <Text
              key={bodyContent.id}
              text={bodyContent.primary.text_content}
            />
          )
        } else if (bodyContent.slice_type === 'image_and_caption') {
          return (
            <ImageAndCaption
              key={bodyContent.id}
              image={bodyContent.primary.image}
              caption={bodyContent.primary.image_caption}
            />
          )
        } else if (bodyContent.slice_type === 'code') {
          return (
            <Code key={bodyContent.id} language={bodyContent.primary.language}>
              {bodyContent.primary.code_content.text}
            </Code>
          )
        } else if (bodyContent.slice_type === 'block_quote') {
          return (
            <BlockQuote
              key={bodyContent.id}
              quote={bodyContent.primary.block_quote}
              cite={bodyContent.primary.cite}
            />
          )
        } else if (bodyContent.slice_type === 'markdown') {
          return (
            <Markdown
              key={bodyContent.id}
              markdown={bodyContent.primary.markdown}
            />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}
