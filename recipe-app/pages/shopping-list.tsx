import { IngredientListItem } from "../model/ingredient";
import Head from "next/head";
import Link from "next/link";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { Checkbox, IconButton, IIconProps, List, PrimaryButton } from "@fluentui/react";
import { checkOffItem, removeItem } from "../state/shopping-list";
import styles from '../styles/Shopping-list.module.css';
import NavLayout from "../components/nav-layout";

const deleteIcon: IIconProps = {iconName: 'Delete'}

export default function ShoppingList () {
    const shoppingListItems = (useSelector as TypedUseSelectorHook<RootState>)((state) => state.shoppingList.ingredientList);
    const dispatch = useDispatch<AppDispatch>();

    const onRenderCell = (item: IngredientListItem) => {
        return <span><Checkbox
            className={styles.checkbox}
            label={item.name}
            checked={item.haveItem}
            onChange={() => dispatch(checkOffItem(item.id))}
        />
        <IconButton
            title="Delete"
            iconProps={deleteIcon}
            onClick={() => dispatch(removeItem(item.id))}
        ></IconButton></span>;
    }

    return (<NavLayout selectedKey="shopping-list">
        <h1>My Shopping List</h1>
        {shoppingListItems.length > 0 ?
            <List items={shoppingListItems} onRenderCell={onRenderCell}/> :
            <p>No items yet</p>
        }
        <Link href="/" passHref><PrimaryButton>Home</PrimaryButton></Link>
    </NavLayout>);
}
