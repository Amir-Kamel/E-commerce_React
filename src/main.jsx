import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
  </Provider>,

)



/*

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";



createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
            <App />
    </PersistGate>
</Provider>
);

*/