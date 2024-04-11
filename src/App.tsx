import React, { useState } from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import RobotCard from './components/RobotCard';
import ShoppingCart from './components/ShoppingCart';
import styles from "./App.module.css";

function App() {

    const [count, setCount] = useState<number>(0);

    const onClickHandler = () => { setCount(count + 1) };
    
    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo" />
                <h1>Super Awesome Robots Online Store</h1>
            </div>

            <button onClick={onClickHandler}> click </button>
            <span> count: {count} </span>

            <ShoppingCart />

            <div className={styles.robotList}>
                {robots.map(r => <RobotCard id={r.id} name={r.name} email={r.email} />)}
            </div>
        </div>
    );
}

export default App;
