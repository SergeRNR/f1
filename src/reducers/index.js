import _ from 'lodash';
import { FETCH_DRIVERS } from '../actionTypes';
import { FETCH_CIRCUITS } from '../actionTypes';
import { FETCH_CONSTRUCTORS } from '../actionTypes';
import { SET_FILTER } from '../actionTypes';
import { SET_CURRENT_SCREEN } from '../actionTypes';

const initialState = {
    circuits: {},
    constructors: {},
    drivers: {},
    currentScreen: ''
};

let getCollection = (action, dataPath) => {
    let collection = {};
    if (action.status === 'success') {
        let data = _.get(action.data, dataPath, []);
        collection.items = data;
        collection.limit = Number(action.data.limit);
        collection.offset = Number(action.data.offset);
        collection.total = Number(action.data.total);
    } else if (action.status === 'error') {
        collection.items = [];
    }
    return collection;
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_SCREEN:
            return {...state, ...{ currentScreen: action.screen }};

        case FETCH_DRIVERS:
            let drivers = getCollection(action, 'DriverTable.Drivers');
            return {...state, ...{ drivers: {...state.drivers, ...drivers} }};

        case FETCH_CIRCUITS:
            let circuits = getCollection(action, 'CircuitTable.Circuits');
            return {...state, ...{ circuits: {...state.circuits, ...circuits} }};

        case FETCH_CONSTRUCTORS:
            let constructors = getCollection(action, 'ConstructorTable.Constructors');
            return {...state, ...{ constructors: {...state.constructors, ...constructors} }};

        case SET_FILTER:
            let collectionName = state.currentScreen;
            let collection = state[collectionName];
            let result = {};
            result[collectionName] = {...collection, ...{ filter: action.filter }};

            return {...state, ...result};

        default:
            return state;
    }
};
