import React from 'react';

class List extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        let rows = this.props.list.map(item =>
            <tr key={item.driverId}>
                <td>{item.givenName} {item.familyName}</td>
            </tr>
        );

        return (
            <table className='sm-table'>
                <thead>
                    <tr>
                        <th>Name</th>
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
