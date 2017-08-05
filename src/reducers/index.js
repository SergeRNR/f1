import { FETCH_DRIVERS } from '../actionTypes';
import { FETCH_CIRCUITS } from '../actionTypes';
import { FETCH_CONSTRUCTORS } from '../actionTypes';

const initialState = {
    circuits: {},
    constructors: {},
    drivers: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DRIVERS:
            let drivers = {};
            if (action.status) {
                if (action.status === 'success') {
                    let data = action.data.MRData.DriverTable.Drivers;
                    drivers.items = data;
                } else if (action.status === 'error') {
                    drivers.items = [];
                }
                drivers.fetching = false;
            } else {
                drivers.fetching = true;
            }
            return {...state, ...{ drivers }};

        case FETCH_CIRCUITS:
            let circuits = {};
            if (action.status) {
                if (action.status === 'success') {
                    let data = action.data.MRData.CircuitTable.Circuits;
                    circuits.items = data;
                } else if (action.status === 'error') {
                    circuits.items = [];
                }
                circuits.fetching = false;
            } else {
                circuits.fetching = true;
            }
            return {...state, ...{ circuits }};

        case FETCH_CONSTRUCTORS:
            let constructors = {};
            if (action.status) {
                if (action.status === 'success') {
                    let data = action.data.MRData.ConstructorTable.Constructors;
                    constructors.items = data;
                } else if (action.status === 'error') {
                    constructors.items = [];
                }
                constructors.fetching = false;
            } else {
                constructors.fetching = true;
            }
            return {...state, ...{ constructors }};

        default:
            return state;
    }
};
