import React from 'react'
import { priceFormat } from 'utils/index';
import './ProductCard.scss';
export default function ProductCard({productName, productPrice, productDesc, productStyles, productDelivery}) {
  const theProductDesc = productDesc.replace(/^(.{114}[^\s]*).*/, "$1...");
  return (
    <div className="wrapper-product-card padding-15">
      <div className="flex j-space-between">
        <div className="wrapper-product-name">
          <h1>{productName}</h1>
        </div>
        <div className="wrapper-product-price">
          <h2>Rp {priceFormat(productPrice)}</h2>
        </div>
      </div>

      <div className="wrapper-product-description flex f-column">
        <p>{theProductDesc}</p>
        <span className="product-styles">
          {
            (productStyles || []).join(', ')
          }
        </span>
        <span className="product-delivery">
          {productDelivery} Days
        </span>
      </div>
    </div>
  )
}
