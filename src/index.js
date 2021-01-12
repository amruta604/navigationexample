import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import  './App.css';
//import reportWebVitals from './reportWebVitals';
import TopBar from './topbar';
//import SideBarMobile from './sidebarmobile';
//import SideBarLapTop from './sidebarlaptop';
import Routes from './router';
import Footer from './footer';

ReactDOM.render(
  <React.StrictMode> 
    <TopBar />
     {/* <SideBarMobile />  */}
    {/* < SideBarLapTop /> */}
    <Routes /> 
      
     {/* < App />     */}
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
