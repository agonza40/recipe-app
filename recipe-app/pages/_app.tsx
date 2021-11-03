import { initializeIcons, ThemeProvider } from '@fluentui/react'
import { Provider } from 'react-redux'
import store from '../state/store'
import '../styles/globals.css'
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {

  return <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps}/>
      </ThemeProvider>
    </Provider>
}

export default MyApp

initializeIcons();

export async function getNavItems() {
  const x = await fetch('/api/recipe');
  const recipes = await x.json();
  return [{
    links: [{
      name: 'Home',
      url: '/',
      key: 'home'
    }, {
      name: 'My Shopping List',
      url: '/shopping-list',
      key: 'shopping-list'
    }]
  }, {
    name: 'Recipes',
    links: recipes.map(r => {
      return {
        name: r.name,
        key: `recipe-${r.id}`,
        url: `/recipe/${r.id}`,
      }
    })
  }]
}