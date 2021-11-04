import { INavLink, INavLinkGroup, Nav } from '@fluentui/react';
import { useRouter } from 'next/dist/client/router';
import CommonHeader from './common-header';
import styles from './nav-layout.module.scss';

export interface INavLayoutProps {
    selectedKey: string;
}

const navGroups: INavLinkGroup[] = [{
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
    links: [{
        name: 'Buttered Toast',
        key: 'recipe-buttered-toast',
        url: '/recipe/buttered-toast',
    }]
}];


export default function NavLayout ({children, selectedKey}) {
    const router = useRouter();
    const linkClick = (ev: React.MouseEvent<HTMLElement>, link: INavLink) => {
        ev.preventDefault();
        router.push(link.url);
    };
    const renderGroupHeader = (group: INavLinkGroup) => {
        return <p className={styles['nav-group-header']}>{group.name}</p>;
    };

    return (<>
        <CommonHeader/>
        <Nav
            key="main-nav"
            className={styles.nav}
            groups={navGroups}
            selectedKey={selectedKey}
            onLinkClick={linkClick}
            onRenderGroupHeader={renderGroupHeader}
        ></Nav>
        <main
            className={styles.main}
        >{children}</main>
    </>);
}