import React from 'react'
import './Footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer-component'>
        <input type='text' placeholder='Your favourite cricketer...' onChange={this.props.saveText} />
      </div>
    )
  }
}

export default Footer
