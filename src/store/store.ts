import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/store/features/cart";
import {movieApi} from "@/store/services/movieApi";
import {reviewApi} from "@/store/services/reviewApi";
import {cinemaApi} from "@/store/services/cinemaApi";
import {filterReducer} from "@/store/features/filter";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware, reviewApi.middleware, cinemaApi.middleware]),
  devTools: process.env.NODE_ENV !== "production"
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
