// import { Outlet } from 'react-router-dom';

import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const Root = () => {
    return (
        <div className=" container mx-auto">
            <Header />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;