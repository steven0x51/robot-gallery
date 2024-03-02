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
        // this.handleClick = this.handleClick.bind(this);
    }

    // "this" keyword scopes the method not the class,
    // Need to bind this in constructor, or use arrow function instead
    //
    // handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     this.setState({dropDown: !this.state.dropDown});
    // }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({dropDown: !this.state.dropDown});
    }

    render() {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={this.handleClick}>
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