import { createStore, combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { persistReducer } from 'redux-persist';
import AsyncStorage  from '@react-native-community/async-storage';

const appInitialState = {
    isAuthenticated: false,
};

const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const setIsAuthenticated = createAction(IS_AUTHENTICATED);

const isAuthenticatedReducer = handleActions(
    {
        [IS_AUTHENTICATED]: (state, { payload }) => ({
            ...state,
            isAuthenticated: payload,
        }),
    },
    appInitialState,
);

const rootReducer = combineReducers({
    isAuthenticatedReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// };

const configureStore = () => createStore(persistedReducer);
export const store = configureStore();
