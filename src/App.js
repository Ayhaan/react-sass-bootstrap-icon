
import React, { Fragment } from 'react'
import ExempleBootstrap from './components/ExempleBootstrap'
import Nav from './components/Nav'
import Img from './components/Img'
import Icon from './components/Icon'

export default function App() {
  return (
    <Fragment>
      < Nav />
      < ExempleBootstrap />
      <hr/>
      < Img />
      <hr/>
      < Icon />
    </Fragment>
  )
}
