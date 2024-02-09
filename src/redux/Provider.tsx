"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
