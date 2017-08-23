import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { setPage } from '../actionCreators';

const mapStateToProps = state => {
  let collection = state[state.currentScreen];

  return collection && collection.items
    ? {
      total: Math.ceil(collection.total / collection.limit),
      current: Math.ceil(collection.offset / collection.limit),
    }
    : {
      total: 1,
      current: 0
    };
};

const PaginationContainer = connect(
  mapStateToProps,
  { onPageChange: setPage }
)(Pagination);

export default PaginationContainer;
