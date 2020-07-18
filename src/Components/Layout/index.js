import React from 'react';
import { Helmet } from 'react-helmet';


export const Layout = ({ children, title, subtitle }) => {
    return (
        <React.Fragment>
            <Helmet>
                {title && <title>{title}| Tigram 🐱 </title>}
                {subtitle && <meta name='description' content={subtitle} />}
            </Helmet>
        </React.Fragment>
    )
}