import React, { useState } from 'react'
import './Profile.css'

const Profile = () => {

    const[user, setUser] = useState([])

    fetch("https://sandbox.nextleap.app/page/fetch")
    .then(res => res.json())
    .then(data => setUser(data.loggedInUser))
    .catch(error=> console.log(error));
  return (
    <div className='main-div'>
        <div className='profile'>
            <img src={user.imageData?.url} alt={user.imageData?.alt} width={40} height={40}/>
        </div>
        <div className='user-name'>
           {user.userName}
        </div>
        <div className='userId'>
         {user.userId}
        </div>
        
    </div>
  )
}

export default Profile