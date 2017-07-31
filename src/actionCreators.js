import { BASE_API_URL } from './config';
import { FETCH_DRIVERS_SUCCESS } from './actionTypes';
import { FETCH_DRIVERS_ERROR } from './actionTypes';

export function fetchDrivers() {
    return (dispatch) => {
        fetch(`${BASE_API_URL}/drivers.json`).then(
            response => response.json().then(data => dispatch({
                type: FETCH_DRIVERS_SUCCESS,
                data
            })),
            error => dispatch({
                type: FETCH_DRIVERS_ERROR,
                error
            })
        );
    };
}

export function loadPlayers() {
    return (dispatch, getState) => {
        let { players } = getState();

        if (players.length) {
            return;
        }

        dispatch({
            type: 'LOAD_PLAYERS_REQUEST'
        });

        fetch(`${BASE_API_URL}players/`).then(
            response => response.json().then(data => dispatch({
                type: 'LOAD_PLAYERS_SUCCESS',
                data
            })),
            error => dispatch({
                type: 'LOAD_PLAYERS_FAILURE',
                error
            })
        );
    }
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
