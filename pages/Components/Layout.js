import Header from "./Header/Header";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";

function Layout({children}){
    return <>
    <Header/>
    <LeftNavBar/>
    <RightNavBar/>
    {children}
    </>
}
export default Layout