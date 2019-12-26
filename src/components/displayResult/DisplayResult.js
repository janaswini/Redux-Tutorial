import React from 'react'

class DisplayResult extends React.Component {
  render () {
    return (
      <div className='display-area'>
        <div> {this.props.headerText} </div>
        <div> {this.props.footerText} </div>
      </div>
    )
  }
}

export default DisplayResult
