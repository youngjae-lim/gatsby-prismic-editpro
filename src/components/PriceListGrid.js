import React from 'react'
import styled from 'styled-components'
import RichText from './RichTextCustom'

export default function PriceListGrid({ title, items }) {
  return (
    <PriceListGridWrapper>
      <RichText render={title} />
      <PriceListGridStyles>
        {items.map((item, index) => (
          <PriceBlockWrapper
            key={`price-block-${index}`}
            mostPopular={item.price_type === 'Most popular'}
          >
            {item.price_type === 'Most popular' && (
              <div className='most-popular'>Most popular</div>
            )}
            <RichText render={item.price_list_title.raw} />
            <div className='price'>
              ${item.price_per_month}
              <span className='duration'>/ month</span>
            </div>
            <RichText render={item.price_list_description.raw} />
          </PriceBlockWrapper>
        ))}
      </PriceListGridStyles>
    </PriceListGridWrapper>
  )
}

const PriceListGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`
const PriceListGridStyles = styled.div`
  margin: 0 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;
`

const PriceBlockWrapper = styled.div`
  background: ${props => (props.mostPopular ? 'orange' : '#eee')};
  color: ${props => (props.mostPopular ? 'white' : 'black')};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
  padding: 10px;
  margin: 0 10px;
  position: relative;

  .most-popular {
    position: absolute;
    border-radius: 0 20px 0 0;
    top: 0;
    right: 0;
    background: green;
    padding: 5px;
    font-weight: bold;
  }

  .price {
    background: rgba(0, 0, 0, 0.2);
    font-size: 30px;
    text-align: center;
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 20px;

    .duration {
      font-size: 16px;
    }
  }
`
