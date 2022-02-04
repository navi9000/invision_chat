import { configureStore, combineReducers } from '@reduxjs/toolkit'
import currentChatReducer from '../features/currentChat'
import currentUserReducer from '../features/currentUser'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  currentChat: currentChatReducer,
  currentUser: currentUserReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
})