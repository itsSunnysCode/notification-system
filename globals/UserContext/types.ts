interface Action {
  type: string;
  payload:any;
}
interface UserState {
  userData: any;
  notifications:any;
}


export type {Action, UserState}