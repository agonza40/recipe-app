import { Ingredient } from "../model/ingredient";

const whiteBread = {
    name: 'White Bread',
    id: 'white-bread'
};

const butter = {
    id: 'butter',
    name: 'Butter'
}

const spaghettiNoodles = {
    id: 'spaghetti-noodles',
    name: 'Spaghetti Noodles'
}

const ingredients: {[index: string]: Ingredient} = {
    [whiteBread.id]: whiteBread,
    [butter.id]: butter,
    [spaghettiNoodles.id]: spaghettiNoodles
};

export default ingredients;