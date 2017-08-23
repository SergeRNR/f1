import React from 'react';
import { connect } from 'react-redux';
import { setCurrentScreen } from '../../actionCreators';
import PropTypes from 'prop-types';

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(setCurrentScreen('home'));
  }

  render() {
    return (
      <div>
        <h4>Please select a category to display.</h4>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Home);
