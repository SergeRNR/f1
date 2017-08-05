import { BASE_API_URL } from './config';
import { FETCH_DRIVERS } from './actionTypes';
import { FETCH_CIRCUITS } from './actionTypes';
import { FETCH_CONSTRUCTORS } from './actionTypes';

export function fetchDrivers() {
    return (dispatch, getState) => {
        let { drivers } = getState();
        if (drivers && drivers.items) {
            return;
        }

        dispatch({
            type: FETCH_DRIVERS
        });

        fetch(`${BASE_API_URL}/drivers.json`).then(
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

        fetch(`${BASE_API_URL}/circuits.json`).then(
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

        fetch(`${BASE_API_URL}/constructors.json`).then(
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
