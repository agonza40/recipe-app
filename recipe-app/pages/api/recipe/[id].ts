import { NextApiRequest, NextApiResponse } from "next";
import { recipes } from "../../../fixtures/recipes";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id as string;
    res.json(recipes[id]);
}
