import { takeLatest, call, put } from 'redux-saga/effects'
import 'isomorphic-unfetch'

import * as actionType from './product.action.type'

// wathches for an action to be dispached to the store, triggering a workerSaga
export function* productPageSaga() {
    yield takeLatest(actionType.LOAD_PRODUCT, productSaga)
}

function getData() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}

function* productSaga() {
    try {
        const products = yield fetch('http://localhost:3000/static/pdpDetails.json')
        const productsData = yield products.json()
        yield put({ type: actionType.LOAD_PRODUCT_SUCCESS, product: productsData.ProductInfoResponsePayload.products });
    }
    catch (error) {
        yield put({ type: actionType.LOAD_PRODUCT_FAILURE });
    }
}