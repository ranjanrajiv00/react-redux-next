import * as actionType from './home.action.type';

const initialState = {
    dog: null,
    fetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOAD_IMAGE:
            return { ...state, fetching: true };

        case actionType.LOAD_IMAGE_SUCCESS:
            return { ...state, fetching: false, dog: action.dog };
            
        case actionType.LOAD_IMAGE_FAILURE:
            return { ...state, fetching: false, dog: null };
            
        default:
            return state
    }
}