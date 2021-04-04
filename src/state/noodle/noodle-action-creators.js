import NoodleActionTypes from './noodle-action-types';

export const getNoodles = () => {
    console.log(NoodleActionTypes.NOODLES_FETCH_REQUESTED);
    return {
        type: NoodleActionTypes.NOODLES_FETCH_REQUESTED,
    };
};

export const getNoodlesSuccess = (noodles) => {
    return {
        type: NoodleActionTypes.NOODLES_FETCH_SUCCEEDED,
        payload: noodles,
    };
};

export const getNoodlesFailure = (error) => {
    return {
        type: NoodleActionTypes.NOODLES_FETCH_FAILURE,
        payload: error,
    };
};

export const setFilters = (filters) => {
    return {
        type: NoodleActionTypes.NOODLES_SET_FILTERS,
        payload: filters,
    };
};

export const resetFilters = () => {
    return {
        type: NoodleActionTypes.NOODLES_RESET_FILTERS,
    };
};
