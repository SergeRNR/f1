 // TODO:
 // 1) put 'drivers', 'constructors', 'circuits' in constants (for example screenTypes.js)
 // 2) put 'success', 'error' in constants (for example statuses.js)

import * as types from './actionTypes';
import fetchService from './services/fetchService';

export function setCurrentScreen(screen) {
  return {
    type: types.SET_CURRENT_SCREEN,
    screen
  };
}

export function fetchDrivers(offset = 0) {
  return (dispatch, getState) => {
    let { drivers } = getState();
    let filter = drivers.filter;

    fetchService.fetch('drivers', { offset }, filter)
      .then(data => dispatch({
        type:   types.FETCH_DRIVERS,
        status: 'success',
        data
      }))
      .catch(error => dispatch({
        type:   types.FETCH_DRIVERS,
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
        type:   types.FETCH_CIRCUITS,
        status: 'success',
        data
      }))
      .catch(error => dispatch({
        type:   types.FETCH_CIRCUITS,
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
        type:   types.FETCH_CONSTRUCTORS,
        status: 'success',
        data
      }))
      .catch(error => dispatch({
        type:   types.FETCH_CONSTRUCTORS,
        status: 'error',
        error
      }));
  };
}

const fetchData = (collectionName, dispatch, offset = 0) => {
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

export function setFilter(filter) {
  return (dispatch, getState) => {
    let state = getState();
    let collectionName = state.currentScreen;

    dispatch({
      type: types.SET_FILTER,
      filter
    });

    fetchData(collectionName, dispatch);
  };
}

export function setPage(page) {
  return (dispatch, getState) => {
    let state = getState();
    let collectionName = state.currentScreen;
    let collection = state[collectionName];
    let offset = collection.limit * page;

    fetchData(collectionName, dispatch, offset);
  };
}
