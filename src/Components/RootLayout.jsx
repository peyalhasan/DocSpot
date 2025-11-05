import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className=" min-h-[700px] ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;