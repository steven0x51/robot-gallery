import React from "react";
import styles from './RobotCard.module.css'

interface RobotProps {
    id: number,
    name: string,
    email: string,
};

const RobotCard : React.FC<RobotProps>= ({id, name, email}) => {
    return <div className={styles.cardContainer}>
        <img alt="robot" src={`https://robohash.org/${id}`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
};

export default RobotCard;