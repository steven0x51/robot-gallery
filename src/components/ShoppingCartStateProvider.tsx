import React, { PropsWithChildren, useState } from "react";

interface ShoppingCartItem {
    id: number;
    name: string;
};

const cart: ShoppingCartItem[] = [];

export const shoppingCartSetContext = React.createContext<React.Dispatch<React.SetStateAction<ShoppingCartItem[]>> | undefined>(undefined);
export const shoppingCartStateContext = React.createContext<ShoppingCartItem[]>(cart);


export const ShoppingCartStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
    const [shoppingCartState, setShoppingCartState] = useState(cart)
    return (
        <shoppingCartStateContext.Provider value={shoppingCartState}>
        <shoppingCartSetContext.Provider value={setShoppingCartState}>
            {props.children}
        </shoppingCartSetContext.Provider>
        </shoppingCartStateContext.Provider>
    );
}