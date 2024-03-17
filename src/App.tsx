import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import RobotCard from './components/RobotCard';
import ShoppingCart from './components/ShoppingCart';
import styles from "./App.module.css";

interface Props {}

interface State{
    fetchedRobotLst: any[];
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fetchedRobotLst: [],
        };
    }

    componentDidMount(): void {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({fetchedRobotLst: data}));
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo" />
                    <h1>Super Awesome Robots Online Store</h1>
                </div>

                <ShoppingCart />

                <div className={styles.robotList}>
                    {/* {robots.map(r => <RobotCard id={r.id} name={r.name} email={r.email} />)} */}
                    {this.state.fetchedRobotLst.map(r => <RobotCard id={r.id} name={r.name} email={r.emai}/>)}
                </div>
            </div>
        );
    }
}

export default App;
