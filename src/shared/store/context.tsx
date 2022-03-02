import {
  createContext, useReducer, ReactNode, useMemo, useContext,
} from 'react';
import { reducer } from './reducer';

type State = {
  code: boolean;
};
type Action = {
  type: 'SET_CODE';
  payload: any;
};
type Dispatch = (action: Action) => void;

const AppContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState = {};

function ContextProvider({ children }: { children: ReactNode }): any {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    useMemo(() => (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    ), [value])
  );
}

const useAppContext = (): any => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error('You need to use a Provider');
  }
  return context;
};

export {
  ContextProvider,
  useAppContext,
};
