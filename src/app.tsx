import React from 'react'
import IMAGE from './App.png';
import LOGO from './logo.svg'

import { useState, useEffect, Suspense } from "react";

import  Button  from './components/Button'

import { Counter } from './Counter'
const App = (): JSX.Element => {

  const [num, setNum] = useState(0);

  let date = new Date();

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    alert();
    setNum(num - 1);
  };

  return (
    <React.Fragment>
      <h1>React TypeScript Webpack 111223 Starter Template</h1>
      <img src={IMAGE} alt="image" width="300" height="200"/>
      <img src={LOGO} alt="image" width="300" height="200"/>
      {/* <Counter/> */}
      <Button text="Decrement Me!" onClick={handleDecrement} />
    </React.Fragment>
  )
}

export { App }