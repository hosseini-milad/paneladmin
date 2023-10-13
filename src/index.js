import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import './css/reyham.css';
import './css/fontAwesome.css';

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

const cookies = new Cookies();
var lang = JSON.parse(localStorage.getItem(env.cookieLang));

if(!lang){
  localStorage.setItem(env.cookieLang,JSON.stringify(
    {lang:errortrans.defaultLang}));
  lang = JSON.parse(localStorage.getItem(env.cookieLang));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    {cookies.get(env.cookieName)?
      <Routes>
        <Route path="/" element={<Layout><Dashboard/></Layout>}/>
        <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/>
        
      </Routes>:
      <Routes>
        <Route path="/" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>
        <Route path="/:login" element={<LayoutLogin><Login lang={lang}/></LayoutLogin>}/>

        <Route path="/users" element={<Layout><Users lang={lang}/></Layout>}/>
      </Routes>}
     </Router>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
