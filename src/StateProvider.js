import React, { createContext, useContext, useReducer } from 'react';

// Our App data:
export const StateContext = createContext();

// Our provider:
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Access from within components:
export const useStateValue = () => useContext(StateContext);
