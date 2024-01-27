import React, { useEffect, useState } from 'react'
import './Follow.css'
import bluetick from './Tick icon.svg'

const Follow = () => {

    const[follow, setFollowData] = useState({title:"", usersToFollow:[]});


    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data from your API link
            const response = await fetch('https://sandbox.nextleap.app/page/fetch');
            const data = await response.json();
            setFollowData(data.followData);
          } 
          catch (error) {
            console.error('Error fetching Twitter data:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleFollow = (e) =>{
            const followed = e.target.data;
            alert("followed")
      }
  return (
    <div className='follow-container'>
        <div className='wrapper'>
            <div className='title'>{follow.title}</div>
            {follow.usersToFollow.map((user, index) =>(
                <div key={index} className='users'>
                    <div className='user'>
                        <div className='img-div'>
                            <img className='img-content' src={user.imageData.url}/>
                        </div>

                        <div className='user-details'>
                            <p className='name'>{user.userName}<span><img src={bluetick} alt="/" /></span></p>
                            <p className='user-id'>@{user.userId}</p>
                        </div>
                        <div className='follow-btn'>
                            <button onClick={handleFollow}>Follow</button>
                        </div>
                    </div>
                </div>

            ))}
                <div className='show-more-div'>
                <p className='show-more-text'>Show More</p>
                </div>
        </div>
    </div>
  )
}

export default Follow