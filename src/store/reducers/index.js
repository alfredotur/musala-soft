import {combineReducers} from 'redux';
import user from './user';
import operation from "./operation";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import expireIn from 'redux-persist-transform-expire-in';
import {encryptTransform} from "redux-persist-transform-encrypt";
import createCompressor from "redux-persist-transform-compress";

import * as config from '../../config/system.json';



const expireTime = 1000 * 60 * 31;
const expirationKey = "expirationKey";

const compressor = createCompressor({whitelist: ['user']});
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
    transform: [
        expireIn(expireTime, expirationKey, []),
        encryptTransform({
            secretKey: 'portal-nauta',
            onError: function (error) {
                console.log(error);
            }
        }),
        compressor
    ]
}

const reducers = combineReducers({user,operation});

export default persistReducer(persistConfig,reducers);
