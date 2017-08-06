import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.onMount();
    // }

    onChange(event) {
        let target = event.target;
        let value = target.value || null;
        let name = target.name;
        this.setState({ [name]: value });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onFilterApply(this.state);
    }

    render() {
        return (
            <div className='f1-filter'>
                <form onSubmit={this.onSubmit} className='form-inline'>
                    <div className='form-group'>
                        <label>
                            Select year:
                            <select name='year' onChange={this.onChange} className='form-control'>
                                <option>All</option>
                                <option value='2017'>2017</option>
                                <option value='2007'>2007</option>
                            </select>
                        </label>
                        <button type='submit' className='btn btn-default'>Apply</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Filter;
