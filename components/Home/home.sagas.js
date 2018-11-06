import { takeLatest, call, put } from 'redux-saga/effects'
import 'isomorphic-unfetch'

import * as actionType from './home.action.type'

// wathches for an action to be dispached to the store, triggering a workerSaga
export function* homePageSaga() {
    yield takeLatest(actionType.LOAD_IMAGE, loadImageSaga)
}

function getData() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}

function* loadImageSaga() {
    try {
        const image = yield fetch('https://dog.ceo/api/breeds/image/random')
        const data = yield image.json()
        yield put({ type: actionType.LOAD_IMAGE_SUCCESS, dog: data });
    }
    catch (error) {
        yield put({ type: actionType.LOAD_IMAGE_FAILURE });
    }
}