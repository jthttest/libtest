import { connect } from 'react-redux'

import Filter from './Filter'
import { setVisibilityFilter, VisibilityFilters } from '../../actions'

const mapDispatchToProps = dispatch => {
  return {
    showAll: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)),
    showCompleted: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)),
    showActive: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)
