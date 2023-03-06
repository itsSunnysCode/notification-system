/*types */
import { UserState, Action } from "~/types";
/*action type */
import { actionTypes } from "./actionTypes";

export const userReducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case actionTypes.fillUserData:
      return { ...state, userData: action.payload };
    case actionTypes.addNotification:
      return {
        ...state,
        userData: {
          ...state.userData,
          notifications: [
            action.payload,
            ...(state?.userData?.notifications || []),
          ],
        },
      };
    case actionTypes.fillNotification:
      return {
        ...state,
        userData: {
          ...state.userData,
          notifications: action.payload,
        },
      };
    case actionTypes.setMarkZero:
      return {
        ...state,
        userData: {
          ...state.userData,
          markZero:action.payload
        },
      };  
    default:
      return state;
  }
};
