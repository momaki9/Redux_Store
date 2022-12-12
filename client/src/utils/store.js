import { createStore } from 'redux';
import useProductReducer from './reducers';

export default createStore(useProductReducer);