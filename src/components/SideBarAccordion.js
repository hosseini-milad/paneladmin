import env from "../env";
import errortrans from "../translate/error";
import menutrans from "../translate/menuAccordion"
import Cookies from 'universal-cookie';
import React from "react";
import tabletrans from "../translate/tables";
import MenuItems from "./MenuItems";

function SideBarAccordion(props){
    const url = window.location.pathname.split('/')[1]
    const menuList = menutrans
    const logOff=()=>{
        const cookies = new Cookies();
        cookies.remove(env.cookieName,{ path: '/' });
       setTimeout(()=>(window.location.reload(),1000))
    }
    return(
        <aside className={
            `sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3
            ${props.lang.dir==="rtl"?" fixed-end me-3 rotate-caret bg-gradient-dark ps ps__rtl":
            " fixed-start ms-3  bg-gradient-dark"}`}
            id="sidenav-main">
            <div className="sidenav-header">
            <i className="serviceIcon fas fa-close position-absolute end-0 top-0 "
            onClick={()=>props.setPinMenu(0)}/>
            <a className="navbar-brand m-0" href={menuList.title.href} target="_blank">
                <i className={`serviceIcon fas ${menuList.title.icon}`}></i>
                <span className="ms-1 font-weight-bold text-white">{menuList.title[props.lang.lang]}</span>
            </a>
            </div>
            <hr className="horizontal light mt-0 mb-2"/>
            <div className={`collapse navbar-collapse  w-auto 
                ${props.lang.dir==="rtl"?" ps ps__rtl ps--active-y":""}`} 
                id="sidenav-collapse-main">
            <ul className="navbar-nav">
                {menuList?menuList.menu.map((menu,i)=>(
                    <MenuItems menu={menu} key={i} domain={url}
                    lang={props.lang}/>
                )):''}
                
                <li className="nav-item mt-3">
                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white " href="/profile">
                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="menuIcon fas fa-user"></i>
                        </div>
                        <span className="nav-link-text ms-1">Profile</span>
                    </a>
                </li>
            </ul>
            </div>
            <div className="sidenav-footer position-absolute w-100 bottom-0 ">
            <div className="mx-3">
                <a className="btn bg-gradient-primary w-100" href="#" 
                onClick={logOff} type="button">{errortrans.logOut[props.lang.lang]}</a>
            </div>
            </div>
        </aside>
    )
}
export default SideBarAccordion