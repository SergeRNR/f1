import React from 'react';
import { connect } from 'react-redux';
import FilterContainer from '../FilterContainer';
import ListContainer from './ListContainer';
import PaginationContainer from '../PaginationContainer';
import { setCurrentScreen } from '../../actionCreators';

class Drivers extends React.Component {
    componentDidMount() {
        this.props.dispatch(setCurrentScreen('drivers'));
    }

    render() {
        return (
            <div>
                <h4>Filter</h4>
                <FilterContainer />
                <h4>Drivers</h4>
                <ListContainer />
                <PaginationContainer />
            </div>
        );
    }
}

export default connect()(Drivers);
