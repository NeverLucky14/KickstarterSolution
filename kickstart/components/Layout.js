import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Container } from "semantic-ui-react";
import Header from "./Header";
//import Head from 'next/head';
 
const Layout = (props) => {
    return(
        <Container>
            <Header/>
            {props.children}
        </Container>
    )
};


export default Layout;