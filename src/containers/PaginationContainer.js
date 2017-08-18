import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { setPage } from '../actionCreators';

const mapStateToProps = state => {
    let collection = state[state.currentScreen];

    if (collection && collection.items) {
        return {
            total: Math.ceil(collection.total / collection.limit),
            current: Math.ceil(collection.offset / collection.limit),
        };
    } else {
        return {
            total: 1,
            current: 0
        };
    }
};

const mapDispatchToProps = dispatch => ({
    onPageChange: page => dispatch(setPage(page))
});

const PaginationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);

export default PaginationContainer;
