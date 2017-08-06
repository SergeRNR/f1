import { BASE_API_URL } from './config';
import { FETCH_DRIVERS } from './actionTypes';
import { FETCH_CIRCUITS } from './actionTypes';
import { FETCH_CONSTRUCTORS } from './actionTypes';
import { SET_FILTER } from './actionTypes';
import { SET_CURRENT_SCREEN } from './actionTypes';

let getUrl = (collection, filter) => {
    return `${BASE_API_URL}/${collection}.json?limit=30`;
};

export function setCurrentScreen(screen) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_CURRENT_SCREEN,
            screen
        });
    };
}

export function fetchDrivers() {
    return (dispatch, getState) => {
        let { drivers } = getState();
        if (drivers && drivers.items) {
            return;
        }

        dispatch({
            type: FETCH_DRIVERS
        });

        fetch(getUrl('drivers')).then(
            response => response.json().then(data => dispatch({
                type:   FETCH_DRIVERS,
                status: 'success',
                data
            })),
            error => dispatch({
                type:   FETCH_DRIVERS,
                status: 'error',
                error
            })
        );
    };
}

export function fetchCircuits() {
    return (dispatch, getState) => {
        let { circuits } = getState();
        if (circuits && circuits.items) {
            return;
        }

        dispatch({
            type: FETCH_CIRCUITS
        });

        fetch(getUrl('circuits')).then(
            response => response.json().then(data => dispatch({
                type:   FETCH_CIRCUITS,
                status: 'success',
                data
            })),
            error => dispatch({
                type:   FETCH_CIRCUITS,
                status: 'error',
                error
            })
        );
    };
}

export function fetchConstructors() {
    return (dispatch, getState) => {
        let { constructors } = getState();
        if (constructors && constructors.items) {
            return;
        }

        dispatch({
            type: FETCH_CONSTRUCTORS
        });

        fetch(getUrl('constructors')).then(
            response => response.json().then(data => dispatch({
                type:   FETCH_CONSTRUCTORS,
                status: 'success',
                data
            })),
            error => dispatch({
                type:   FETCH_CONSTRUCTORS,
                status: 'error',
                error
            })
        );
    };
}

export function setFilter(filter) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_FILTER,
            filter
        });
        debugger;
        dispatch(fetchDrivers());
    };
}

// PLAYERS LEGACY

let getSearchPromise = name => {
    if (name) {
        return fetch(`${BASE_API_URL}players/?name=${name}`).then(response => response.json());
    } else {
        return Promise.resolve([null]);
    }
};

export function searchPlayers(nameA, nameB) {
    return dispatch => {
        Promise.all([
            getSearchPromise(nameA),
            getSearchPromise(nameB)
        ])
        .then(data => dispatch({
            type: 'SEARCH_PLAYERS',
            data: {
                playerA: data[0][0],
                playerB: data[1][0]
            }
        }))
        .catch(error => dispatch({
            type: 'SEARCH_PLAYERS_FAILURE',
            error
        }));
    }
}
