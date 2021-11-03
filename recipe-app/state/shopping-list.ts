import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Ingredient, IngredientListItem } from "../model/ingredient"
import { RootState } from "./store";

interface ShoppingListState {
    ingredientList: IngredientListItem[]
}

const initialState: ShoppingListState = {
    ingredientList: []
}

export const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addIngredients(state, action: PayloadAction<Ingredient[]>) {
            const restItems = action.payload
                .filter(ingredient => !state.ingredientList.some(i => i.id === ingredient.id))
                .map(ingredient => {return {...ingredient, haveItem: false};});
            state.ingredientList.push(...restItems)
        },
        checkOffItem(state, action: PayloadAction<string>) {
            const item = state.ingredientList.find(ingredient => ingredient.id === action.payload)
            item.haveItem = !item.haveItem;
        },
        removeItem(state, action: PayloadAction<string>) {
            const itemIndex = state.ingredientList.findIndex(ingredient => ingredient.id === action.payload)
            if (itemIndex >= 0) {
                state.ingredientList.splice(itemIndex, 1);
            }
        }
    }
});

export const { addIngredients, checkOffItem, removeItem } = shoppingListSlice.actions;

export const selectIngredients = (state: RootState) => state;

export default shoppingListSlice.reducer;