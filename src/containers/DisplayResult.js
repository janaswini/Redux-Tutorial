import DisplayResult from '../components/displayResult/DisplayResult'
import { connect } from 'react-redux'

/* get data from redux */

const mapStateToProps = (state, ownProps) => {
  console.log('.....from display container ......')
  console.log(state)
  return {
    headerText: state.headerReducer.userInput,
    footerText: state.footerReducer.userInput
  }
}

/* for changing data */ 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const DisplayResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayResult)

export default DisplayResultContainer
