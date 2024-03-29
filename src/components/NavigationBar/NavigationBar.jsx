import React, { useState, useEffect } from 'react';
import './NavigationBar.css'
import notification from './Notifications.png'
import Profile from './profile/Profile1';

const NavigationBar = () => {
    const [sideNavigation, setSideNavigation] = useState([]);

    useEffect(() => {
        fetch('https://sandbox.nextleap.app/page/fetch')
            .then(response => response.json())
            .then(data => setSideNavigation(data.sideNavigationButtons))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="navigation-bar">

            <ul className='side-list'>
                {sideNavigation.map((button, index) => (
                    <li key={index} className='links'>
                        <a href={button.actionUrl}>
                            <img src={button.icon.url} alt={button.icon.alt} width={button.icon.aspX} height={button.icon.aspY} />
                            {button.buttonText}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='post-button'>
                <button className='inside-btn'>Tweet</button>
            </div>
            <div className='notification'>
                    <img src={notification} alt="" />
            </div>

            <div>
                < Profile />
            </div>
    </div>
      
    );
};


export default NavigationBar;