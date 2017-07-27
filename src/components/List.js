import React from 'react';

class List extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        let rows = this.props.list.map(player =>
            <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.battles_total}</td>
                <td>{player.days_total}</td>
                <td>{player.rating}</td>
                <td>{player.vehicles_x}</td>
            </tr>
        );

        return (
            <div className='sm-content'>
                <table className='sm-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Battles total</th>
                            <th>Days total</th>
                            <th>Rating</th>
                            <th>Vehicles X</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
