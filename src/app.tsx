import React from 'react'
import IMAGE from './App.png';
import LOGO from './logo.svg'

import { Counter } from './Counter'
const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1>React TypeScript Webpack 111223 Starter Template</h1>
      <img src={IMAGE} alt="image" width="300" height="200"/>
      <img src={LOGO} alt="image" width="300" height="200"/>
      <Counter/>
    </React.Fragment>
  )
}

export { App }