import React from "react";
import {Link} from "react-router-dom";
import styles from "./Login.module.css";

export default function Login(){
    return (
        <div >
            <input placeholder="Login to Home"></input>
            <Link to="/home">
                <button className={styles.login}>To Home</button>
            </Link>
        </div>
    )
}