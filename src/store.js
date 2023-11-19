import { DataReducer, SelectDataReducer } from './Reducers/DataReducer';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;