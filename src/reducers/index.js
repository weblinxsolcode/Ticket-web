import { combineReducers } from "redux";
import userReducer from '../features/userSlice'
import modeSlice from '../features/modeSlice'

const reducers = combineReducers({
    user: userReducer,
    mode: modeSlice
});

export default reducers