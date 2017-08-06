import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { setFilter } from '../actionCreators';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onFilterApply: (filter) => dispatch(setFilter(filter))
});

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer;
