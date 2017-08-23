import React from 'react';
import { connect } from 'react-redux';
import FilterContainer from '../FilterContainer';
import ListContainer from './ListContainer';
import PaginationContainer from '../PaginationContainer';
import { setCurrentScreen } from '../../actionCreators';
import PropTypes from 'prop-types';

class Constructors extends React.Component {
  componentDidMount() {
    this.props.setCurrentScreen('constructors');
  }

  render() {
    return (
      <div>
        <h4>Filter</h4>
        <FilterContainer />
        <h4>Constructors</h4>
        <ListContainer />
        <PaginationContainer />
      </div>
    );
  }
}

Constructors.propTypes = {
  setCurrentScreen: PropTypes.func
};

export default connect(() => ({}), { setCurrentScreen })(Constructors);
