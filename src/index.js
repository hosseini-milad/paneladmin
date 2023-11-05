import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/App.css';
import './css/fontAwesome.css';
import './css/salimi.css';
import './css/reyham.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Login from './pages/Login';
import Users from './pages/Users';
import Cookies from 'universal-cookie';
import errortrans from './translate/error';
import LayoutLogin from './components/LayoutLogin';
import env from './env';
import UserDetailHolder from './modules/Users/UserData/UserDetailHolder';
import Orders from './pages/Orders';
import OrderDetailHolder from './modules/Orders/OrderData/OrderDetailHolder';
import Profile from './pages/Profile';
import Services from './pages/Services';
import ServiceDetailHolder from './modules/Service/ServiceData/ServiceDetailHolder';

const cookies = new Cookies();
const style = document.getElementById('style-direction');
var lang = JSON.parse(localStorage.getItem(env.cookieLang));
/*if (lang.dir === 'rtl') {
  style.href = '/css/rtl.css';
} */
if(!lang){
  localStorage.setItem(env.cookieLang,JSON.stringify(
    { lang:errortrans.defaultLang,
      dir:errortrans.defaultDir,
      color:errortrans.defaultColor}));
  lang = JSON.parse(localStorage.getItem(env.cookieLang));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    {cookies.get(env.cookieName)?
      <Routes>
        <Route path="/" element={<Layout><Dashboard lang={lang}/></Layout>}/>
        <Route path="/login" element={<Layout><Profile lang={lang}/></Layout>}/>
        <Route path="/dashboard" element={<Layout><Dashboard lang={lang}/></Layout>}/>
        <Route path="/users" element={<Layout><Users lang={lang}/></Layout>}/>
        <Route path="/users/detail/:userId" element={<Layout><UserDetailHolder lang={lang}/></Layout>}/>

        <Route path="/orders" element={<Layout><Orders lang={lang}/></Layout>}/>
        <Route path="/orders/detail/:orderId" element={<Layout><OrderDetailHolder lang={lang}/></Layout>}/>
        <Route path="/services" element={<Layout><Services lang={lang}/></Layout>}/>
        <Route path="/services/detail/:orderId" element={<Layout><ServiceDetailHolder lang={lang}/></Layout>}/>
      </Routes>:
        <Routes>
          <Route path="/" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
          <Route path="/:auth" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
        </Routes>}
     </Router>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
