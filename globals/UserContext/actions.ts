/*types */
import { actionTypes } from "./actionTypes";
/*action types */
import {Action} from "./types";

const fillUserData = (dispatch:React.Dispatch<Action>) => (payload:any) => {
  dispatch({
    type: actionTypes.fillUserData,
    payload:payload
  });
};

export const actions:any = {fillUserData}