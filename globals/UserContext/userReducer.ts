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
    default:
      return state;
  }
};
