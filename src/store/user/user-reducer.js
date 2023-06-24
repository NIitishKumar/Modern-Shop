import { USER_ACTION_TYPES } from "./user.types"

let initalState = {}

 const userReducer = (state = initalState, action) => {
    const {type, payload } = action
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : payload,
            }

        default:
            return state;
    }
}

export default userReducer;