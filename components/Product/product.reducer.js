import * as actionType from './product.action.type';

const initialState = {
    product: {},
    reviews: [],
    rating: null,
    fetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOAD_PRODUCT:
            return { ...state, fetching: true };

        case actionType.LOAD_PRODUCT_SUCCESS:
            return { ...state, fetching: false, product: action.product };

        case actionType.LOAD_PRODUCT_FAILURE:
            return { ...state, fetching: false, product: null };

        case actionType.UPDATE_RATING:
            return { ...state, rating: action.payload };

        case actionType.UPDATE_REVIEWS:
            let { userName, reviews } = action.payload
            return { ...state, reviews: [...state.reviews, { userName, reviews }] };
            
        default:
            return state
    }
}