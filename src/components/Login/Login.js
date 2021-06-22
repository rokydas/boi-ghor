import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { firebaseConfig } from './config';
import { Link } from "react-router-dom";

const Login = () => {

    const login = () => {

    }

    if (firebase.apps.length == 0) {
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="login-form">
                <h1 className="text-center mb-5">Login</h1>
                <form >
                    <h4 className="mb-2">Enter your email</h4>
                    <input type="email" placeholder="Email" className="form-control mb-2" />
                    <h4 className="mb-2">Enter your password</h4>
                    <input type="password" placeholder="Password" name="password" className="form-control mb-3" />
                    <button className="btn custom-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;