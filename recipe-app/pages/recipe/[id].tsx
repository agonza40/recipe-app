import Link from 'next/link';
import { IStackTokens, MessageBar, MessageBarType, PrimaryButton, Stack } from '@fluentui/react';
import { useDispatch } from 'react-redux';
import CommonHeader from '../../components/common-header';
import { recipeList, recipes } from '../../fixtures/recipes';
import { Recipe } from '../../model/recipe';
import { addIngredients } from '../../state/shopping-list';
import { AppDispatch } from '../../state/store';
import styles from '../../styles/Recipe.module.css';
import NavLayout from '../../components/nav-layout';
import { useState } from 'react';

const stackTokens: IStackTokens = {
    childrenGap: 'm',
    padding: 's1'
};

export default function RecipePage({recipeData}: {recipeData: Recipe}) {
    const dispatch = useDispatch<AppDispatch>();
    const [ingredientsAdded, setIngredientsAdded] = useState(false);
    return (<NavLayout selectedKey={`recipe-${recipeData.id}`}>
        <h1>{recipeData.name}</h1>
        <section className={styles.section}>
            <p>What you&apos;ll need</p>
            <ul>
                {recipeData.ingredients.map(i => <li key={i.id}>{i.name}</li>)}
            </ul>
            <p>What to do</p>
            <ol>
                {recipeData.steps.map((step, index) => <li key={index}>{step}</li>)}
            </ol>
            {ingredientsAdded && <MessageBar
                messageBarType={MessageBarType.success}
                onDismiss={() => setIngredientsAdded(false)}
                isMultiline={false}
                truncated={true}
            >
                Ingredients added to list<br/>
                <ul>
                    {recipeData.ingredients.map(i => <li key={i.id}>{i.name}</li>)}
                </ul>
            </MessageBar>}
        </section>
        <Stack horizontal horizontalAlign="center" tokens={stackTokens}>
            <PrimaryButton onClick={() => {
                dispatch(addIngredients(recipeData.ingredients));
                setIngredientsAdded(true);
            }}>Add To shopping list</PrimaryButton>
            <Link href="/" passHref><PrimaryButton>Home</PrimaryButton></Link>
        </Stack>
    </NavLayout>);
}

export async function getStaticPaths() {
    return {
        paths: recipeList.map(r => {return {params: {id: r.id}};}),
        fallback: false
    };
}

export async function getStaticProps({params}) {
    return {
        props: {
            recipeData: recipes[params.id]
        }
    };
}