import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {

}

interface State {
    dropDown: boolean
}

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { dropDown: false }
    }

    render() {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={() => this.setState({dropDown: !this.state.dropDown})}>
                    <FiShoppingCart />
                    <span>Shopping Cart: 2 (items)</span>
                </button>
                <div className={styles.cartDropDown} style={{display: this.state.dropDown ? "block" : "none"}}>
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;