import React from 'react';

export default function Product({ props }) {
  const products = props.product.map((item, index) => {
    return (
      <div key={`product-${index}`} style={{ border: '1px solid #ccc', width:'400px', padding:'10px' }}>
        <div># : {item.productId}</div>
        <div>ProductTitle : {item.productTitle}</div>
      </div>
    );
  });

  const reviews = props.reviews.map((item, index) => {
    return (
      <div key={`review-${index}`}>
        <div>{item.userName}@ {item.reviews}</div>
      </div>
    );
  });
  return (
    <div>
      <h1>{props.title}</h1>
      {products}
      <span>Reviews</span>
      {reviews}
      <br />
      <span>Rating</span> : {props.rating}
    </div>
  );
}