import { connect } from 'react-redux';
import List from './List';
import { loadPlayers } from '../actionCreators';

const mapStateToProps = state => ({
    list: state.players
});

const mapDispatchToProps = dispatch => ({
    onMount: () => dispatch(loadPlayers())
});

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer;
