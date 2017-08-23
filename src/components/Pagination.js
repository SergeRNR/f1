import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  goPrev = () => {
    let currentIndex = this.props.current;
    if (currentIndex > 0) {
      this.props.onPageChange(--currentIndex);
    }
  }

  goNext = () => {
    let currentIndex = this.props.current;
    if (currentIndex < this.props.total - 1) {
      this.props.onPageChange(++currentIndex);
    }
  }

  goToPage = event => {
    let index = Number(event.target.dataset.index) || 0;
    if (index != this.props.current) {
      this.props.onPageChange(index);
    }
  }

  render() {
    let total = this.props.total;
    let current = this.props.current;
    let maxPages = 5;
    let middle = Math.ceil(maxPages / 2);
    let pages = [];

    let link = index => (
      <li key={index} className={this.props.current === index ? 'active' : ''}>
        <a onClick={this.goToPage} data-index={index}>{index + 1}</a>
      </li>
    );

    if (total <= maxPages) {
      for (let i = 0; i < this.props.total; i++) {
        pages.push(link(i));
      }
    } else if (current < middle) {
      for (let i = 0; i < maxPages; i++) {
        pages.push(link(i));
      }
    } else if (current >= (total - middle)) {
      for (let i = total - maxPages; i < total; i++) {
        pages.push(link(i));
      }
    } else {
      for (let i = current - middle + 1; i < current + middle; i++) {
        pages.push(link(i));
      }
    }

    if (pages.length === 1) {
      return null;
    }

    return (
      <div>
        <ul className="pagination f1-pagination">
          <li>
            <a aria-label="Previous" onClick={this.goPrev}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pages}
          <li>
            <a aria-label="Next" onClick={this.goNext}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}


Pagination.propTypes = {
  onPageChange: PropTypes.func,
  current: PropTypes.number,
  total: PropTypes.number
};

export default Pagination;
