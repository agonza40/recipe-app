import { Ingredient } from "../model/ingredient";

const whiteBread = {
    name: 'White Bread',
    id: 'white-bread'
};

const butter = {
    id: 'butter',
    name: 'Butter'
}

const ingredients: {[index: string]: Ingredient} = {
    [whiteBread.id]: whiteBread,
    [butter.id]: butter
};

export default ingredients;