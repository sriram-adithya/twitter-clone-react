import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HeaderFeed from './components/HomeFeed/HeaderFeed/HeaderFeed';
import Profile from "./components/NavigationBar/profile/Profile1.jsx"
import Threads from './components/HomeFeed/Thread/Thread.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    
    <NavigationBar/>
    <div className="feed-design">
    < HeaderFeed />
    <Threads />
    </div>
  </>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
