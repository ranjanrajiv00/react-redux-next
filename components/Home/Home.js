import React from 'react';

export default function Home({ props }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.dog.message}></img>
    </div>
  );
}