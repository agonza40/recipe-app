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

const butteredNoodles: Recipe = {
    id: 'buttered-noodles',
    name: 'Buttered Noodles',
    ingredients: [
        ingredients['spaghetti-noodles'],
        ingredients['butter']
    ],
    steps: [
        'Cook noodles to desired doneness',
        'Melt butter while noodles are cooking',
        'Put cooked noodles in a bowl',
        'Spread butter on noodles and stir'
    ]
};

export const recipes: {[index: string]: Recipe} = {
    [butteredToast.id]: butteredToast,
    [butteredNoodles.id]: butteredNoodles
};


export const recipeList: RecipeListItem[] = Object.values(recipes).map(r => {
    return {
        id: r.id,
        name: r.name
    };
});