import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as authorizedAccessSlice } from './authorizedAccess/authorizedAccess'
import { reducer as dataUser } from './messageUser/messageUser'
const reducers = combineReducers({
  authAccesSlice: authorizedAccessSlice,
  dataUser: dataUser
})

export default configureStore({
  reducer: reducers
})