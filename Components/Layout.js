import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import React from "react";
import {PropTypes} from "prop-types";
import Header from "../Components/Header/Header";

function Layout ({children}) {
    return <>
    <Header/>
    <LeftNavBar/>
    <RightNavBar/>
    {children}
    </>

}
Layout.propTypes = {
    "children": PropTypes.object.isRequired
};
export default Layout;
