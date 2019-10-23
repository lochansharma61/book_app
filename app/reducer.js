import {combineReducers} from 'redux';
import booksReducer from './screens/books/reducer'

 const reducers = combineReducers({
    books: booksReducer,
});
export default reducers