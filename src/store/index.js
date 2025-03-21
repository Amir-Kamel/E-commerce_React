import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;




/*
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import { persistStore , persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist/es/constants";

const persistConfig = { key:'root' , storage , whitelist: ['cart'] } 

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    cart: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore redux-persist actions
        },
      }),
  });
  


export const persistor = persistStore(store);
*/