import Footer from '../components/footer/Footer'
import {saveFooterUserText} from '../actions/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    headerText: state.headerReducer.userInput
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveText: (e) => {
      dispatch(saveFooterUserText(e.target.value))
    }
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
