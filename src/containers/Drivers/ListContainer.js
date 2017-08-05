import { connect } from 'react-redux';
import List from '../../components/List';
import { fetchDrivers } from '../../actionCreators';

const mapStateToProps = state => ({
    keyProp: 'driverId',
    list: state.drivers.items || [],
    columns: [
        {
            name: 'Name',
            prop: item => `${item.givenName} ${item.familyName}`
        },
        {
            name: 'DOB',
            prop: 'dateOfBirth'
        },
        {
            name: 'Nationality',
            prop: 'nationality'
        }
    ]
});

const mapDispatchToProps = dispatch => ({
    onMount: () => dispatch(fetchDrivers())
});

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer;
