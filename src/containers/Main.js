import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import Circuits from './Circuits';
import Drivers from './Drivers';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/circuits' component={Circuits} />
                    <Route path='/drivers' component={Drivers} />
                </Switch>
            </main>
        );
    }
}

export default Main;
