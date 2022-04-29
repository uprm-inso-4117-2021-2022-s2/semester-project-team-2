// import styles from '../styles/login.module.css'
import React, { useState, useEffect } from 'react';
// import Link from "next/link";
// import Header from '../components/dashboard/Header';
import { login, signup } from "./utils/authentication"

import {
    Button,
    Header,
    Divider,
    Form,
    Grid,
    Modal,
    Segment,
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';



export default function Login() {
    useEffect(() => {
        let token = localStorage.jwtToken;
        if (token) {
            window.location.href = "/Dashboard";
        }
    }, []);

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [errorLogin, setErrorLogin] = useState("");
    const [errorSignUp, setErrorSignUp] = useState("");

    const inputChange = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // const toggleForm = () => {
    //     setLoggingIn(!isLoggingIn);
    // }

    const onLogin = async (e: any) => {
        e.preventDefault();
        setErrorLogin("");
        const pUserData = {
          email: userData.email,
          password: userData.password,
        };
        let res = await login(pUserData);
        if (res) {
          setErrorLogin("Credentials did not match");
        } else {
          window.location.href = "/Dashboard";
        }
    };

    const onSignUp = async (e: any) => {
        e.preventDefault();
        setErrorSignUp("");
        let res = await signup(userData);
        if (res) {
          setErrorSignUp("Email already in use by another account");
        } else {
          setSuccess(true);
          setTimeout(() => {}, 3000);
          setOpen(false);
        }
    };


    return (
        <Segment style={{backgroundImage: `url(${"/landingpage/images/sheep1.jpg"})`, height: 950}}>
            <Header dividing textAlign="center" size="huge">
                Welcome to Livestock management!
            </Header>
            <Modal
                closeIcon
                centered={false}
                open={open}
                closeOnDimmerClick={false}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Modal.Header>Sign Up!</Modal.Header>
                <Modal.Content>
                    <Form success={success}>
                        <Form.Input
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            required
                            value={userData.firstName}
                            onChange={inputChange}
                        />
                        <Form.Input
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            required
                            value={userData.lastName}
                            onChange={inputChange}
                        />
                        <Form.Input
                            label="Email"
                            placeholder="Email"
                            name="email"
                            required
                            value={userData.email}
                            onChange={inputChange}
                            error={errorSignUp}
                        />
                        <Form.Input
                            label="Password"
                            placeholder="Password"
                            name="password"
                            type="password"
                            required
                            value={userData.password}
                            onChange={inputChange}
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button positive onClick={onSignUp}>
                        Sign Up
                    </Button>
                </Modal.Actions>
            </Modal>
            <Segment 
                placeholder
                style={{marginTop:100}}
            >
                <Grid columns={2} relaxed="very" stackable>
                    <Grid.Column>
                        <Form onSubmit={onLogin}>
                            <Form.Input
                                icon="user"
                                iconPosition="left"
                                label="Email"
                                placeholder="Email"
                                name="email"
                                required
                                value={userData.email}
                                onChange={inputChange}
                                error={errorLogin}
                            />
                            <Form.Input
                                icon="lock"
                                iconPosition="left"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                value={userData.password}
                                onChange={inputChange}
                                error={errorLogin}
                            />
                            <Button content="Login" primary />
                        </Form>
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle">
                        <Button
                            content="Sign up"
                            icon="signup"
                            size="big"
                            onClick={() => setOpen(true)}
                        />
                    </Grid.Column>
                </Grid>

                <Divider vertical>Or</Divider>
            </Segment>
        </Segment>
    );
}