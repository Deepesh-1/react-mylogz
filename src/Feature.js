import React from 'react';
import data from './Data.js';
import { useState } from 'react';
export default function Feature() {
  const [count, setCount] = useState(0);
  const addToCart = () => setCount((count = count + 1));
  const list = data.map((data) => (
    <li key={data.id}>
      {data.title}
      <p>{data.price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </li>
  ));

  return (
    <div>
      <p>{count}</p>
      <ul>{list}</ul>
    </div>
  );
}
