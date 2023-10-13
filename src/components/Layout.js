import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import HeaderLogin from "./HeaderLogin";
import SideBar from "./SideBar";
const lang = JSON.parse(localStorage.getItem('panel-lang'));

function Layout(props){
    const [pinMenu,setPinMenu] = useState(0)
    return(
        <div className={pinMenu?"holder g-sidenav-show  bg-gray-200 g-sidenav-pinned":"holder g-sidenav-show  bg-gray-200"}>
            <SideBar setPinMenu={setPinMenu}/>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y">
                <Header lang={lang} setPinMenu={setPinMenu} pinMenu={pinMenu}/>
                {props.children}
                <Footer />
            </main>
        </div>
    )
}
export default Layout