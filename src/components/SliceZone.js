import React from 'react'
import Hero from './Hero'
import CallToActionGrid from './CallToActionGrid'
import PriceListGrid from './PriceListGrid'

export default function SliceZone({ body }) {
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
            <PriceListGrid
              key={bodyContent.id}
              title={bodyContent.primary.title.raw}
              items={bodyContent.items}
            />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}
