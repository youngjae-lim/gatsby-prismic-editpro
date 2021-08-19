import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'

export default function Index({ data }) {
  const { body } = data.prismicHomepage.data

  return (
    <Layout>
      <SliceZone body={body} />
    </Layout>
  )
}

export const query = graphql`
  query {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageDataBodyHero {
            id
            slice_type
            primary {
              hero_content
              hero_title {
                raw
                html
                text
              }
              background_image {
                url
                gatsbyImageData
              }
            }
          }
          ... on PrismicHomepageDataBodyCallToActionGrid {
            id
            slice_type
            primary {
              section_title {
                html
                raw
                text
              }
            }
            items {
              a_call_to_action_title {
                html
                raw
                text
              }
              content {
                html
                raw
                text
              }
              button_label
              button_destination {
                uid
              }
              featured_image {
                url
                gatsbyImageData
              }
            }
          }
          ... on PrismicHomepageDataBodyPriceList {
            id
            slice_type
            primary {
              title {
                html
                raw
                text
              }
            }
            items {
              price_list_title {
                html
                raw
                text
              }
              price_per_month
              price_list_description {
                html
                raw
                text
              }
              price_type
            }
          }
        }
      }
    }
  }
`
