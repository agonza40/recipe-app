import { Ingredient } from "./ingredient";

export interface RecipeListItem {
    id: string;
    name: string;
}

export interface Recipe extends RecipeListItem {
    ingredients: Ingredient[];
    steps: string[];
}