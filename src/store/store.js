import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducers from '../reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'persist-store',
  storage : storageSession,
}


const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export default store;






