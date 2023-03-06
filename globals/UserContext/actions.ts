/*types */
import { actionTypes } from "./actionTypes";
/*action types */
import { Action } from "~/types";

const fillUserData = (dispatch: React.Dispatch<Action>) => (payload: any) => {
  dispatch({
    type: actionTypes.fillUserData,
    payload: payload,
  });
};

const addNotification = (dispatch: React.Dispatch<Action>) => (payload: any) => {
  dispatch({
    type: actionTypes.addNotification,
    payload: payload,
  });
};
const fillNotification = (dispatch: React.Dispatch<Action>) => (payload: any) => {
  dispatch({
    type: actionTypes.fillNotification,
    payload: payload,
  });
};
const setMarkZero = (dispatch: React.Dispatch<Action>) => (payload: any) => {
  dispatch({
    type: actionTypes.setMarkZero,
    payload: payload,
  });
};
export const actions: any = { fillUserData,addNotification, fillNotification, setMarkZero};
