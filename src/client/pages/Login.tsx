import React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

const Login: React.FC<LoginProps> = props => {
	return (
        <main className="container">
            <section className="row justify-content-center my-2">
                <h1 className="text-center col-12">
                </h1>
            </section>
        </main>
    );
};

interface LoginProps extends RouteComponentProps {}

export default Login;