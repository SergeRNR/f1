import { connect } from 'react-redux';
import List from '../../components/List';
import { fetchCircuits } from '../../actionCreators';

const mapStateToProps = state => ({
    keyProp: 'circuitId',
    list: state.circuits.items || [],
    columns: [
        {
            name: 'Name',
            prop: 'circuitName'
        },
        {
            name: 'Location',
            prop: item => item.Location.locality
        },
        {
            name: 'Country',
            prop: item => item.Location.country
        }
    ]
});

const mapDispatchToProps = dispatch => ({
    onMount: () => dispatch(fetchCircuits())
});

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer;
