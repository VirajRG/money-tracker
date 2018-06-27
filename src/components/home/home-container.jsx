import { connect } from 'react-redux'
import HomeComponent from './home-component';

const mapDispatchToProps = (dispatch) => {
  return {
    operate : (type, values) => {
      dispatch({type,values});
    }
  };
}
const mapStateToProps = state => ({
  netAmount: state.netAmount
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default HomeContainer