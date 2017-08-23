import React from 'react';
import { connect } from 'react-redux';
import FilterContainer from '../FilterContainer';
import ListContainer from './ListContainer';
import PaginationContainer from '../PaginationContainer';
import { setCurrentScreen } from '../../actionCreators';
import PropTypes from 'prop-types';

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

  static propTypes = {
    dispatch: PropTypes.func
  };
}

export default connect()(Circuits);
