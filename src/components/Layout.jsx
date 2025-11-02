import React from "react";
import Background from "./Background.jsx";
import Sidebar from "./Sidebar.jsx";

const Layout = ({children}) => {


    return (
        <div className={`px-40`}>
            <Background/>
            <Sidebar/>
                {children}
        </div>
    );
};

export default Layout;
