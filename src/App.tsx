import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import RobotCard from './components/RobotCard';
import ShoppingCart from './components/ShoppingCart';
import styles from "./App.module.css";

interface botInfo {
    id: number;
    name: string;
    email: string;
}

function App() {

    const [count, setCount] = useState<number>(0);
    const [remoteRobotList, setRemoteRobotList] = useState<botInfo[]>([]);

    // invokes when count changes
    useEffect(() => { document.title = `clicked ${count} times` }, [count]);
    
    // invokes when componentDidMount, only run once similar to initialise
    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()
        .then(data => setRemoteRobotList(data))
        )}, []);

    // invokes everytime the page is updated: without second parameter
    // infinity loop: fetched data updates the remoteRobotList -> remotRobotList cause the page to rerender -> page rerender casuse this useEffect gets called again...
    // 
    // useEffect(() => { 
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json()
    //     .then(data => setRemoteRobotList(data))
    //     )});

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
                  {/* mock data from robots.json */}
                {robots.map(r => <RobotCard id={r.id} name={r.name} email={r.email} />)}

                {/* from API */}
                {remoteRobotList.map(r => <RobotCard id={r.id} name={r.name} email={r.email} />)}
            </div>
        </div>
    );
}

export default App;
