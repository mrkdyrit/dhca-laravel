import React, { useState } from "react";
import { Head, usePage } from '@inertiajs/react';
import CenteredLayout from "../../Layouts/CenteredLayout";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "@inertiajs/inertia-react";
import ValidationToastContainer from "../../Components/ValidationToastContainer";

export default function Login() {
    const {data, setData, post}  = useForm({})
    
    // Login Form Submit
    function loginForm(e) {
        e.preventDefault()
        post(route('auth-login'), data)
    }

    // Retrieve any errors and flash messages
    const { errors } = usePage().props
    const { flash } = usePage().props

    return (
        <>
            <Head title="Login"/>
            <CenteredLayout
                errors={errors}
                flash={flash}>
                <div className="dhca-container py-3">
                    <div className="dhca-title-box fs-2 fw-bold text-uppercase">
                        <span>Login</span>
                    </div>
                    <div className="mx-2 mt-3 pt-3 px-5">
                        <form onSubmit={loginForm}>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id='username-icon'>
                                    <i className="bi bi-person-fill"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    id="username"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="username-icon"
                                    onChange={e => setData('username', e.target.value)}
                                    required
                                />
                            </InputGroup>
                            <InputGroup className="mb-5">
                                <InputGroup.Text id='password-icon'>
                                    <i className="bi bi-lock-fill"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="password-icon"
                                    onChange={e => setData('password', e.target.value)}
                                    required
                                />
                            </InputGroup>
                            <div className="text-end">
                                <Button
                                    variant="primary"
                                    type="submit">Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </CenteredLayout>
        </>
    )
}