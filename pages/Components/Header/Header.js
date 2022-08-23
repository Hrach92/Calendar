import Info from "./Info"
import SelectAutoWidth from "./Mui"
import Search from "./Search"
import MenuPopupState from "./Settings"
import header from './Header.module.css'
import MenuBar from "./MenuButton"
import Today from "./Today"

function Header(){
    return <header style={{position:'relative',boxSizing:'border-box',marginTop:'20px',height:'40px'}}>
        <div className={header.logo}>logo</div>
        <div className={header.title}>Calendar</div>
        <div><Today/></div>
        <div ><MenuBar/></div>
        <div><Search/></div>
        <div><Info/></div>
        <div><MenuPopupState/></div>
        <div><SelectAutoWidth/></div>
    </header>
}
export default Header