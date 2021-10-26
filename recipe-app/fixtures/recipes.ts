import { Recipe, RecipeListItem } from "../model/recipe";
import ingredients from "./ingredients";

const butteredToast: Recipe = {
    id: 'buttered-toast',
    name: 'Buttered Toast',
    ingredients: [
        ingredients['white-bread'],
        ingredients['butter']
    ],
    steps: [
        'Put white bread in the toaster.',
        'Turn toaster on. Toast until desired doneness.',
        'Put toasted bread on a plate',
        'Spread butter on toasted bread'
    ]
};

export const recipes: {[index: string]: Recipe} = {
    [butteredToast.id]: butteredToast
};


export const recipeList: RecipeListItem[] = Object.values(recipes).map(r => {
    return {
        id: r.id,
        name: r.name
    };
});