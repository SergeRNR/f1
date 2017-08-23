import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = event => {
    let target = event.target;
    let value = target.value && target.value !== 'all' ? target.value : null;
    let name = target.name;
    this.setState({ [name]: value });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onFilterApply(this.state);
  }

  render() {
    let yearOptions = [];
    let currentYear = (new Date).getFullYear();

    for (let i = currentYear; i >= 1950; i--) {
      yearOptions.push((
        <option key={i} value={i}>{i}</option>
      ));
    }

    return (
      <div className='f1-filter'>
        <form onSubmit={this.onSubmit} className='form-inline'>
          <div className='form-group'>
            <label>
              Select year:
              <select name='year' onChange={this.onChange} className='form-control'>
                <option value='all'>All</option>
                {yearOptions}
              </select>
            </label>
            <button type='submit' className='btn btn-default'>Apply</button>
          </div>
        </form>
      </div>
    );
  }

  static propTypes = {
    onFilterApply: PropTypes.func
  };
}

export default Filter;
