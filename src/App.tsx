import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import RobotCard from './components/RobotCard';
import ShoppingCart from './components/ShoppingCart';
import styles from "./App.module.css";

interface Props {}

interface State{
    fetchedRobotLst: any[];
    notSyncedCount: number,
    semiSyncedCount: number,
    fullSyncedCount:number,
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fetchedRobotLst: [],
            notSyncedCount: 0, 
            semiSyncedCount: 0,
            fullSyncedCount: 0,
        };
    }

    componentDidMount(): void {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({fetchedRobotLst: data}));
    }

    notSyncedCountHandler = () => {
        this.setState({notSyncedCount: this.state.notSyncedCount + 1});
        console.log("NotTheLatestCount: ", this.state.notSyncedCount);
    }

    semiSyncedCountHandler = () => {
        this.setState({semiSyncedCount: this.state.semiSyncedCount + 1}, () => console.log("syncedCount: ", this.state.semiSyncedCount));
    }

    fullSyncedCountHandler = () => {
        this.setState((preState, preProps) => { return { fullSyncedCount: preState.fullSyncedCount + 1 }}, () => console.log("fullSyncedCound: ", this.state.fullSyncedCount));
        this.setState((preState, preProps) => { return { fullSyncedCount: preState.fullSyncedCount + 1 }}, () => console.log("fullSyncedCound: ", this.state.fullSyncedCount));
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo" />
                    <h1>Super Awesome Robots Online Store</h1>
                </div>

                <ShoppingCart />

                <button onClick={this.notSyncedCountHandler}>notSyncedCount: {this.state.notSyncedCount}</button>
                <button onClick={this.semiSyncedCountHandler}>semiSyncedCount: {this.state.semiSyncedCount}</button>
                <button onClick={this.fullSyncedCountHandler}>fullSyncedCount: {this.state.fullSyncedCount}</button>

                <div className={styles.robotList}>
                    {/* {robots.map(r => <RobotCard id={r.id} name={r.name} email={r.email} />)} */}
                    {this.state.fetchedRobotLst.map(r => <RobotCard id={r.id} name={r.name} email={r.emai}/>)}
                </div>
            </div>
        );
    }
}

export default App;
