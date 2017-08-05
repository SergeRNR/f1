import { connect } from 'react-redux';
import List from '../../components/List';
import { fetchConstructors } from '../../actionCreators';

const mapStateToProps = state => ({
    keyProp: 'constructorId',
    list: state.constructors.items || [],
    columns: [
        {
            name: 'Name',
            prop: 'name'
        },
        {
            name: 'Nationality',
            prop: 'nationality'
        }
    ]
});

const mapDispatchToProps = dispatch => ({
    onMount: () => dispatch(fetchConstructors())
});

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer;
