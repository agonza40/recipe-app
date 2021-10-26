import CommonHeader from "../../components/common-header";
import { recipeList, recipes } from "../../fixtures/recipes";
import { Recipe } from "../../model/recipe";

export default function RecipePage({recipeData}: {recipeData: Recipe}) {
    return (<>
        <CommonHeader/>
        <main>
            <h1>{recipeData.name}</h1>
            <p>What you&apos;ll need</p>
            <ul>
                {recipeData.ingredients.map(i => <li key={i.id}>{i.name}</li>)}
            </ul>
            <p>What to do</p>
            <ol>
                {recipeData.steps.map((step, index) => <li key={index}>{step}</li>)}
            </ol>
        </main>
    </>);
}

export async function getStaticPaths() {
    return {
        paths: recipeList.map(r => {return {params: {id: r.id}};}),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    return {
        props: {
            recipeData: recipes[params.id]
        }
    };
}