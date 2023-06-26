import {all, call} from "redux-saga/effects";
import { userSage } from "./user/user.saga";

export function* rootSaga(){
    yield all([call(userSage)]);
}