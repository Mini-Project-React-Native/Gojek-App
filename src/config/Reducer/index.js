import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const AllReducer = combineReducers({
  auth: persistReducer({ key: 'auth', storage: AsyncStorage }, AuthReducer),
});

export default AllReducer;