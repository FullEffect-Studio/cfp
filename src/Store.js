import { configureStore } from "@reduxjs/toolkit";
import { portalApi } from "./Services/APISlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer:{[portalApi.reducerPath]: portalApi.reducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portalApi.middleware),
})

setupListeners(store.dispatch)