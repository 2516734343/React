import { connect } from 'react-redux';
import { setVisibilityFilter } from '../store/action';
import Link from '../components/Link';


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}
export default FilterLink(mapStateToProps, mapDispatchToProps)(Link)