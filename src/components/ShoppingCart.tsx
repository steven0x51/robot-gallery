import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { shoppingCartStateContext } from "./ShoppingCartStateProvider";

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
        console.log("e.target: ", e.target); //the element that is clicked on
        console.log("e.currentTarget: ", e.currentTarget); // the element that invokes this handleClick method

        //Only reacts on clicking on the SPAN, no reaction on clicking on the shopping cart icon
        if((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({dropDown: !this.state.dropDown}); 
        }
        
    }

    render() {
        return (
            <shoppingCartStateContext.Consumer> 
            { (value) => {
                return (
                    <div className={styles.cartContainer}>
                        <button className={styles.button} onClick={this.handleClick}>
                            <FiShoppingCart />
                            <span>Shopping Cart: {value?.length} (items)</span>
                        </button>
                        <div className={styles.cartDropDown} style={{display: this.state.dropDown ? "block" : "none"}}>
                            <ul>
                                { value.map((r) => (<li>{r.id}. {r.name}</li>)) }
                            </ul>
                        </div>
                    </div>
                    );
            }}
            </shoppingCartStateContext.Consumer>
        );
    }
}

export default ShoppingCart;