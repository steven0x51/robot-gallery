import React, { useContext } from "react";
import styles from './RobotCard.module.css';
import { appContext } from "../index";
import { shoppingCartSetContext } from "./ShoppingCartStateProvider"

interface RobotProps {
    id: number,
    name: string,
    email: string,
};

const RobotCard : React.FC<RobotProps>= ({id, name, email}) => {
    const context = useContext(appContext);
    const setShoppingCart = useContext(shoppingCartSetContext);

    const addToCart = () => { 
        if (setShoppingCart) {
            setShoppingCart( (s) => { return [...s, {id, name}] })
            }
    };

    return <div className={styles.cardContainer}>
        <img alt="robot" src={`https://robohash.org/${id}`}/>
        <h2>{name}</h2>
        <p>{email}</p>
        <p> auth: {context.userName} </p>
        <button onClick={addToCart}> Add to cart </button>
    </div>
};

export default RobotCard;