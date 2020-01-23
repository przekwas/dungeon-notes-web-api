import React from 'react';
import { useState, useEffect } from 'react';

const Template: React.FC<TemplateProps> = props => {
	return (
        <main className="container">
            <section className="row justify-content-center my-2">
                <h1 className="text-center col-12">
                    Template Page
                </h1>
            </section>
        </main>
    );
};

interface TemplateProps {}

export default Template;