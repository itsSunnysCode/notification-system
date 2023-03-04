/*types */
import { UserState, Action } from "./types";
/*action type */
import { actionTypes } from "./actionTypes";

export const userReducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case actionTypes.fillUserData:
      return { ...state, userData: action.payload};
    case actionTypes.fillNotification:
      return { ...state, notifications: action.payload};
    default:
      return state;
  }
};