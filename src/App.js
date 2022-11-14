import React from 'react';
import './style.css';
import Feature from './Feature';
import Delivery from './Delivery';
import { useState } from 'react';

export default function App() {
  // const [run, setRun] = useState(false);
  // function check() {
  //   setRun(true);
  // }
  return (
    <div>
      {/* <h1 style={{ color: run ? 'red' : 'black' }}>Lets Work</h1>
      <button onClick={check}>check</button> */}
      <Delivery />
    </div>
  );
}
