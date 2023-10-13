function SideBar(props){
    return(
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
            <div className="sidenav-header">
            <i className="serviceIcon fas fa-close position-absolute end-0 top-0 "
            onClick={()=>props.setPinMenu(0)}/>
            <a className="navbar-brand m-0" href=" https://dkmehr.com " target="_blank">
                <i className="serviceIcon fas fa-eercast"></i>
                <span className="ms-1 font-weight-bold text-white">DKmehr Dashboard</span>
            </a>
            </div>
            <hr className="horizontal light mt-0 mb-2"/>
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link text-white " href="../pages/dashboard.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="menuIcon fas fa-dashboard"></i>
                    </div>
                    <span className="nav-link-text ms-1">Dashboard</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="../pages/tables.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="menuIcon fas fa-users"></i>
                    </div>
                    <span className="nav-link-text ms-1">Users</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white active bg-gradient-primary" href="../pages/tables.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="menuIcon fas fa-tasks"></i>
                    </div>
                    <span className="nav-link-text ms-1">Orders</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white " href="../pages/billing.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="menuIcon fas fa-bar-chart"></i>
                    </div>
                    <span className="nav-link-text ms-1">Report</span>
                </a>
                </li>
                
                <li className="nav-item">
                <a className="nav-link text-white " href="../pages/notifications.html">
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="menuIcon fas fa-bell-o"></i>
                    </div>
                    <span className="nav-link-text ms-1">Notifications</span>
                </a>
                </li>
                <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white " href="../pages/profile.html">
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
                <a className="btn bg-gradient-primary w-100" href="/" type="button">Log Out</a>
            </div>
            </div>
        </aside>
    )
}
export default SideBar