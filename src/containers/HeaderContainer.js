import Header from '../components/header/Header'
import {saveHeaderUserText} from '../actions/actions'
import { connect } from 'react-redux'

/* getting redux store  (Read from redux) */

const mapStateToProps = (state, ownProps) => {
  return {
    headerText: state.headerReducer.userInput
  }
}

/* to update global redux data  (Write to redux)*/

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveText: (e) => {
      console.log('.... user is typing....')
      console.log(e.target.value)
      dispatch(saveHeaderUserText(e.target.value))
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
