import { connect } from 'react-redux';
import List from '../components/List';
import { fetchDrivers } from '../actionCreators';

const mapStateToProps = state => ({
    list: state.drivers
});

const mapDispatchToProps = dispatch => ({
    onMount: () => dispatch(fetchDrivers())
});

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer;
