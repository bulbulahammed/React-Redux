import { createStore } from "redux";
import productReducer from './reducers/productReducers';


const store = createStore(productReducer);

export default store;