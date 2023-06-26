import {RootState} from "@/store/store";

export const selectCartModule = (state: RootState) => state.cart;

export const selectTicketAmount = (state: RootState, movieId: string) => selectCartModule(state)[movieId] || 0;
export const selectTotalTicketsAmount = (state: RootState): number => Object.values(selectCartModule(state)).reduce((acc, count) => acc + count, 0) || 0;
