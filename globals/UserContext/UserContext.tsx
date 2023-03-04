
import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
/*Utils */
import { mockSuccessAPI } from '~/utils/mockAPI'
import tc from "~/utils/tc";

/*actions */
import { actions } from './actions';

/*type */
import { Action, UserState } from './types';

/*reducer */
import { userReducer } from './userReducer';


// Define the shape of the context object
interface ContextProps {
  state: UserState;
  dispatch: React.Dispatch<Action>;
}

// Create the initial state
const initialState: UserState = {
  userData: 0,
  notifications:[]
};



// Create the context object
export const UserContext = createContext<ContextProps>({
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