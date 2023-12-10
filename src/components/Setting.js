import { useState } from 'react';
import Cookies from 'universal-cookie';
import env from '../env';

import errortrans from "../translate/error";

const Setting = (props)=>{
    const cookies = new Cookies();
    const [convas,setConvas] = useState(0)
    const token=cookies.get(env.cookieName)||1;
    const lang = props.lang?props.lang.lang:errortrans.defaultLang;
    const logOff=()=>{
       cookies.remove(env.cookieName,{ path: '/' });
       setTimeout(()=>(document.location.reload(),500))
    }
    const sidebarColor=(color)=>{
      console.log(color)
    }
    const sidebarType=(style)=>{
      console.log(style)
    }
    const darkMode=(mode)=>{
      console.log(mode)
    }
    return(
      <div className={props.show?"fixed-plugin ps show":"fixed-plugin ps"}>
        <div className="setting card shadow-lg settingSide">
          <div className="main-setting">
            <div className="setting-container">
              <div className="setting-header">
                <div className="non-click-header">
                  <p>Setup</p>
                  <i className="fa-solid fa-magnifying-glass" style={{color: "#c0c0c0"}}></i>
                  <i className="fa-solid fa-x fa-lg" style={{color: "#c0c0c0"}}></i>
                </div>
                <div className="click-header">
                  <div className="setting-search-input">
                    <input type="search" placeholder="Search by Setup"/>
                    <i className="fa-solid fa-x fa-sm" style={{color: "#c0c0c0"}}></i>
                  </div>
                </div>
              </div>
              <div className="setting-wrapper">
                <div className="setting-gp">
                  <div className="setting-gp-header">
                    <i className="fa-solid fa-sliders" style={{color: "#00caca"}}></i>
                    <h6>Team Setting</h6>
                  </div>
                  <div className="stting-gp-list">
                    <div className="setting-gp-member"><span className="dot"></span>Team URl</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team Profile</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team User</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team OWner</div>
                  </div>
                </div>
                <div className="setting-gp">
                  <div className="setting-gp-header">
                    <i className="fa-solid fa-sliders" style={{color: "#00caca"}}></i>
                    <h6>Team Setting</h6>
                  </div>
                  <div className="stting-gp-list">
                    <div className="setting-gp-member"><span className="dot"></span>Team URl</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team Profile</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team User</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team OWner</div>
                  </div>
                </div>

                <div className="setting-gp">
                  <div className="setting-gp-header">
                    <i className="fa-solid fa-sliders" style={{color: "#00caca"}}></i>
                    <h6>Team Setting</h6>
                  </div>
                  <div className="stting-gp-list">
                    <div className="setting-gp-member"><span className="dot"></span>Team URl</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team Profile</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team User</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team OWner</div>
                  </div>
                </div>

                <div className="setting-gp">
                  <div className="setting-gp-header">
                    <i className="fa-solid fa-sliders" style={{color: "#00caca"}}></i>
                    <h6>Team Setting</h6>
                  </div>
                  <div className="stting-gp-list">
                    <div className="setting-gp-member"><span className="dot"></span>Team URl</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team Profile</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team User</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team OWner</div>
                  </div>
                </div>
                <div className="setting-gp">
                  <div className="setting-gp-header">
                    <i className="fa-solid fa-sliders" style={{color: "#00caca"}}></i>
                    <h6>Team Setting</h6>
                  </div>
                  <div className="stting-gp-list">
                    <div className="setting-gp-member"><span className="dot"></span>Team URl</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team Profile</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team User</div>
                    <div className="setting-gp-member"><span className="dot"></span>Team OWner</div>
                  </div>
                </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Setting