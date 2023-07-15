"use client";
import Spinner from "../components/share/spinner";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner color="white"/>} persistor={persistor}>{children}</PersistGate>
    </Provider>
  )
}