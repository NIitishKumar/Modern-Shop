import {takeLatest, put, all, call, takeEvery } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signOutFailed, signOutActionSuccess } from "./user-action";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopoUp, signOutMethod } from "../../utils/firebase/firebase";

export function* getSnapShotFromUserAuth(userAuth, additionalDetails){
    console.log(userAuth)
    try {
        const userSnapshot = yield call(createUserDocFromAuth, userAuth, additionalDetails);
        console.log(userSnapshot);
        yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailed);
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        // yield put(signInSuccess(userAuth));
        yield call(getSnapShotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
} 

export function* signInWithGoogle(){
    try {
        const {user} = yield call(signInWithGooglePopoUp);
        yield call(getSnapShotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithEmail({payload}){
    const {email, password} = payload;
    try {
        const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapShotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* createUser({payload}){
    try {
        const { email, password, displayName} = payload;

        
        console.log(displayName, payload)
        const {user} = yield call(createAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapShotFromUserAuth, {...user, displayName});
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signOut(){
    try {
        yield call(signOutMethod);
        yield put(signOutActionSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* onEmailSignIn(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignIn(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* createUserStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, createUser);
}

export function* signOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSage() {
    yield all([call(onCheckUserSession), call(onGoogleSignIn), call(onEmailSignIn), call(createUserStart), call(signOutStart)]);
}