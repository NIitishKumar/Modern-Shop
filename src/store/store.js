import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import rootReducer from "./root-reducer";

import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';

const middlewares = [logger];

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeMiddleware = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeMiddleware);

export const persistor = persistStore(store)