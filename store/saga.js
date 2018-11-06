import { all, call } from 'redux-saga/effects';

import { homePageSaga } from '../components/Home/home.sagas'
import { productPageSaga } from '../components/Product/product.sagas'

export default function* rootSaga() {
    try {
        yield all([
            call(homePageSaga),
            call(productPageSaga)
        ]);
    } catch (err) {
    }
}