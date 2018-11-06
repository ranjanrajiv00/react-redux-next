import * as actionType from './product.action.type';

export function loadProduct() {
    return {
        type: actionType.LOAD_PRODUCT
    }
}

export function loadProductSucess() {
    return {
        type: actionType.LOAD_PRODUCT_SUCCESS
    }
}

export function loadProductFailure() {
    return {
        type: actionType.LOAD_PRODUCT_FAILURE
    }
}

export function updateRating(rating) {
    return {
        type: actionType.UPDATE_RATING,
        payload: rating
    }
}

export function updateReviews({ userName, reviews }) {
    return {
        type: actionType.UPDATE_REVIEWS,
        payload: {
            userName,
            reviews
        }
    }
}