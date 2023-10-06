// import { Outlet } from 'react-router-dom';

import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";

const Root = () => {
    return (
        <div className=" container mx-auto">
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;