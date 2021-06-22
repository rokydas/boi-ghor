import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig, actionCodeSettings } from './config';
import { Button, Modal } from 'react-bootstrap';

const Signup = () => {

    if (firebase.apps.length == 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({});
    const [passMatch, setPassMatch] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalText, setModalText] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        if (user.password == user.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const email = user.email;
                    console.log(email);
                    setModalText('Check your email and verify your account.');
                    setShow(true);
                    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
                        .then(() => {
                            // The link was successfully sent. Inform the user.
                            // Save the email locally so you don't need to ask the user for it again
                            // if they open the link on the same device.
                            console.log('done')
                            window.localStorage.setItem('emailForSignIn', email);
                            // ...
                        })
                        .catch((error) => {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            console.log(errorMessage);
                        });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }
    }

    const handleBlur = (e) => {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        if (newUser.password !== newUser.confirmPassword) {
            setPassMatch(true);
        }
        else {
            setPassMatch(false);
        }
        setUser(newUser);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-flex justify-content-center">
            <div className="login-form">
                <h1 className="text-center mb-5">Signup</h1>
                <form onSubmit={signUp}>
                    <h5 className="mb-2">Enter your name</h5>
                    <input onBlur={handleBlur} required type="text" placeholder="Name" className="form-control mb-2" name="name" />
                    <h5 className="mb-2">Enter your email</h5>
                    <input onBlur={handleBlur} required type="email" placeholder="Email" className="form-control mb-2" name="email" />
                    <h5 className="mb-2">Enter your Mobile number</h5>
                    <input onBlur={handleBlur} required type="text" placeholder="Mobile" name="password" className="form-control mb-3" name="mobile" />
                    <h5 className="mb-2">Password</h5>
                    <input onChange={handleBlur} required type="password" placeholder="Password" name="password" className="form-control mb-3" name="password" />
                    <h5 className="mb-2">Confirm Password</h5>
                    <input onChange={handleBlur} required type="password" placeholder="Confirm Password" name="confirmPassword" className="form-control mb-3" />
                    {passMatch && <p className="text-danger">Password and confirm password don't match</p>}
                    <button className="btn custom-btn">Signup</button>
                </form>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>{modalText}</Modal.Body>
                <Button variant="secondary" onClick={handleClose}>
                    Okay
                </Button>
            </Modal>
        </div>
    );
};

export default Signup;