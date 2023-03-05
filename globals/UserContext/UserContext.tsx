
import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
/*Utils */
import { mockSuccessAPI } from '~/utils/mockAPI'
import tc from "~/utils/tc";
import { userData } from '~/utils/mockData';
/*actions */
import { actions } from './actions';

/*type */
import { Action, UserState } from '~/types';

/*reducer */
import { userReducer } from './userReducer';


// interface ContextProps {
//   state: UserState;
//   dispatch: React.Dispatch<Action>;
// }

const initialState: UserState = {
  userData: undefined,
};



// Create the context object
export const UserContext = createContext<any>({
  state: initialState,
  dispatch: () => {}
});


// Create the provider component
export const UserProvider = ({ children }: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const boundActions:any={};
  for (const key in actions) {
    const action: any = actions[key];
    boundActions[key] = action(dispatch);
  }

  const fetchUser = async () => { 
    const [error, res] = await tc(mockSuccessAPI());
    if(res?.isSuccess) {
      boundActions.fillUserData(userData);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])
  
  return (
    <UserContext.Provider value={{ state, ...boundActions }}>
      {children}
    </UserContext.Provider>
  );
};