import { createStore, combineReducers,applyMiddleware } from 'redux'
import countReducer from '../reducers/count'
import randomNumReducer from '../reducers/randomNum'
import randomNumbersReducer from '../reducers/randomNumbers'
import articlesReducer from '../reducers/articles'
import usersReducer from '../reducers/Posts'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        posts: postsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore