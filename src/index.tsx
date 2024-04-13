import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShoppingCartStateProvider } from "./components/ShoppingCartStateProvider"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const defaultContextValue = {
  userName: "Q"
}

export const appContext = React.createContext(defaultContextValue);

root.render(
  <React.StrictMode>
    <appContext.Provider value={defaultContextValue}>
      <ShoppingCartStateProvider>
        <App />
      </ShoppingCartStateProvider>
    </appContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
