import React, { Component } from 'react'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import DisplayResult from './containers/DisplayResult'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <HeaderContainer />
        <FooterContainer />
        <DisplayResult />
      </div>
    )
  }
}

export default App
