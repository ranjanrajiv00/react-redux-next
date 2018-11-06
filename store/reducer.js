import { combineReducers } from 'redux';

import homePage from '../components/Home/home.reducer'
import productPage from '../components/Product/product.reducer'

export default combineReducers({
    homePage,
    productPage
});