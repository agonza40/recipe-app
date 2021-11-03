import { PrimaryButton } from '@fluentui/react';
import Link from 'next/link';
import CommonHeader from '../components/common-header';
import {recipeList} from '../fixtures/recipes';
import styles from '../styles/Home.module.css';

export default function Home({allRecipes}) {
  return (
    <div className={styles.container}>
      <CommonHeader/>
      <main className={styles.main}>
        <h1>Recipes</h1>
        <section>
          <ul>
            {allRecipes.map(r => <li key={r.id}><Link href={`/recipe/${r.id}`}><a>{r.name}</a></Link></li>)}
          </ul>
          <div>
            <Link href="/shopping-list" passHref><PrimaryButton>My Shopping List</PrimaryButton></Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
      <p>Recipes are fun!</p>
      </footer>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      allRecipes: recipeList
    }
  };
}
