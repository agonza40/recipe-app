export interface Ingredient {
    id: string;
    name: string;
}

export interface IngredientListItem extends Ingredient {
    haveItem: boolean;
}