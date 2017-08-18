import React from 'react';
import { connect } from 'react-redux';
import FilterContainer from '../FilterContainer';
import ListContainer from './ListContainer';
import PaginationContainer from '../PaginationContainer';
import { setCurrentScreen } from '../../actionCreators';

class Circuits extends React.Component {
    componentDidMount() {
        this.props.dispatch(setCurrentScreen('circuits'));
    }

    render() {
        return (
            <div>
                <h4>Filter</h4>
                <FilterContainer />
                <h4>Circuits</h4>
                <ListContainer />
                <PaginationContainer />
            </div>
        );
    }
}

export default connect()(Circuits);
