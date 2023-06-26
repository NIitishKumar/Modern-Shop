import { USER_ACTION_TYPES } from "./user.types";
import { createSlice } from '@reduxjs/toolkit'

let initalState = {
  currentUser: {},
  error: null,
};

const userReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };

    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };

    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };

    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };

    case USER_ACTION_TYPES.SIGN_UP_START:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload,
      };

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_OUT_FAILEDs:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
