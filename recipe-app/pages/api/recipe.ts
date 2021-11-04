import { NextApiRequest, NextApiResponse } from 'next';
import { recipeList } from '../../fixtures/recipes';

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    const search = req.query.s;
    res.json(typeof search === 'string' ?
        recipeList.filter(recipe => recipe.name.indexOf(search)) :
        recipeList
    );
}