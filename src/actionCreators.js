import { FETCH_DRIVERS } from './actionTypes';
import { FETCH_CIRCUITS } from './actionTypes';
import { FETCH_CONSTRUCTORS } from './actionTypes';
import { SET_FILTER } from './actionTypes';
import { SET_CURRENT_SCREEN } from './actionTypes';
import fetchService from './services/fetchService';

export function setCurrentScreen(screen) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_CURRENT_SCREEN,
            screen
        });
    };
}

export function fetchDrivers(offset = 0) {
    return (dispatch, getState) => {
        let { drivers } = getState();
        let filter = drivers.filter;

        fetchService.fetch('drivers', { offset }, filter)
            .then(data => dispatch({
                type:   FETCH_DRIVERS,
                status: 'success',
                data
            }))
            .catch(error => dispatch({
                type:   FETCH_DRIVERS,
                status: 'error',
                error
            }));
    };
}

export function fetchCircuits(offset = 0) {
    return (dispatch, getState) => {
        let { circuits } = getState();
        let filter = circuits.filter;

        fetchService.fetch('circuits', { offset }, filter)
            .then(data => dispatch({
                type:   FETCH_CIRCUITS,
                status: 'success',
                data
            }))
            .catch(error => dispatch({
                type:   FETCH_CIRCUITS,
                status: 'error',
                error
            }));
    };
}

export function fetchConstructors(offset = 0) {
    return (dispatch, getState) => {
        let { constructors } = getState();
        let filter = constructors.filter;

        fetchService.fetch('constructors', { offset }, filter)
            .then(data => dispatch({
                type:   FETCH_CONSTRUCTORS,
                status: 'success',
                data
            }))
            .catch(error => dispatch({
                type:   FETCH_CONSTRUCTORS,
                status: 'error',
                error
            }));
    };
}

export function setFilter(filter) {
    return (dispatch, getState) => {
        let state = getState();
        let collectionName = state.currentScreen;

        dispatch({
            type: SET_FILTER,
            filter
        });

        switch (collectionName) {
            case 'drivers':
                dispatch(fetchDrivers());
                break;
            case 'circuits':
                dispatch(fetchCircuits());
                break;
            case 'constructors':
                dispatch(fetchConstructors());
                break;
        }
    };
}

export function setPage(page) {
    return (dispatch, getState) => {
        let state = getState();
        let collectionName = state.currentScreen;
        let collection = state[collectionName];
        let offset = collection.limit * page;

        switch (collectionName) {
            case 'drivers':
                dispatch(fetchDrivers(offset));
                break;
            case 'circuits':
                dispatch(fetchCircuits(offset));
                break;
            case 'constructors':
                dispatch(fetchConstructors(offset));
                break;
        }
    };
}
