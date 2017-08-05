import React from 'react';

let isFunction = func => typeof func === 'function';

class List extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        let keyProp = this.props.keyProp;

        let headRows = this.props.columns.map(column =>
            <th key={column.name.toLowerCase()}>{column.name}</th>
        );

        let rows = this.props.list.map(item =>
            <tr key={item[keyProp]}>
                {this.props.columns.map(column =>
                    <td key={column.name.toLowerCase()}>
                        {(isFunction(column.prop) ? column.prop(item) : item[column.prop])}
                    </td>
                )}
            </tr>
        );

        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        {headRows}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default List;
