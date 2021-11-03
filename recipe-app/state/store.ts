import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "./shopping-list";

const store = configureStore({
    reducer: {
        shoppingList: shoppingListReducer
    }
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;