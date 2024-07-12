import { createContext } from "react";
import { AppState, PropsProvider } from "../components/interfaces/interfaces";

type State = {
  state: AppState
}
// Initial state
const Context = createContext<State>({} as State);

const state : AppState = {
  name: 'Black Widow',
  url: 'http://marvel.io/bw',
  time: '2 hours'
}

// Creating provider
const AppProvider = ({ children }: PropsProvider) => {
  return( 
    <Context.Provider value={{ state }}>
        {children}
    </Context.Provider>
  );
}

export { Context, AppProvider }

