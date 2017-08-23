import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { setFilter } from '../actionCreators';

const mapDispatchToProps = dispatch => ({
  onFilterApply: filter => dispatch(setFilter(filter))
});

const FilterContainer = connect(
  () => ({}),
  mapDispatchToProps
)(Filter);

export default FilterContainer;
