import React from 'react'
import './Header.css'

class Header extends React.Component {
  render () {
    return (
      <div className='header-component'>
        <input type='text' placeholder='Your favourite author..' onChange={this.props.saveText} />
        <div> {this.props.headerText} </div>
      </div>
    )
  }
}

export default Header
