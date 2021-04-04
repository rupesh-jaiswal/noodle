import NoodleActionTypes  from './noodle-action-types';
import { camel } from 'case';

const initialState = {
    noodles: [],
    asyncStatus: 'initial',
    filters: {},
};


export default (state=initialState, action) => {

    switch(action.type) {
        case NoodleActionTypes.NOODLES_FETCH_REQUESTED: 
            return {
                ...state,
                asyncStatus: 'loading',
            };
        case NoodleActionTypes.NOODLES_FETCH_SUCCEEDED: 
            const { noodleData, noodleImageData } = action.payload;
            const noodles = noodleData.map((item, index) => {
                const imageIndex = Math.floor(Math.random()*noodleImageData.length);
                return Object.entries(item).reduce((acc, [key, value])=> ({
                    ...acc,
                    [camel(key)]: value,
                    id:index
                }), {
                    id: index,
                    image: noodleImageData[imageIndex].Image,
                });
            }
            );


            console.log(noodles);
            return {
                ...state,
                noodles: noodles,
                asyncStatus: 'success',
            };

        case NoodleActionTypes.NOODLES_FETCH_FAILURE: 
            return {
                ...state,
                asyncStatus: 'failure',
                error: action.payload,
            };

        case NoodleActionTypes.NOODLES_SET_FILTERS: 
            return {
                ...state,
                filters: action.payload,
            };
        case NoodleActionTypes.NOODLES_RESET_FILTERS: 
            return {
                ...state,
                filters: {},
            };
        default:  return { ...state };
    }
}
