import React from "react";
import styles from "./ShoppingCart.module.css";

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
                <button className={styles.button} onClick={() => this.setState({dropDown: !this.state.dropDown})}>Shopping Cart: 2 (items)</button>
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