import { FETCH_DRIVERS_SUCCESS } from '../actionTypes';

const initialState = {
    drivers: []
};

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DRIVERS_SUCCESS:
            let data = action.data.MRData.DriverTable.Drivers;
            return {...state, ...{ drivers: data }};
            break;

        default:
            return state;
    }
};
