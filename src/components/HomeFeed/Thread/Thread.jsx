import React, { useEffect, useState } from 'react'
import bluetick from'./Tick icon.svg'
import replies from './Comment Stroke Icon.svg'
import likes from './Heart Stroke Icon.svg'
import retweet from './Retweet Stroke Icon.svg'
import share from './Share Stroke icon.svg'

const Threads = () => {

  const[feedThread, setTwitterFeed] = useState([]);


  useEffect(() =>{
    const fetchData = async() =>{
      try{

        const response = await fetch("https://sandbox.nextleap.app/page/fetch");
        const data = await response.json();
        setTwitterFeed(data.feedThread);
      }
      catch(error){
        console.error(error);
      }
    }
    fetchData();
  },[])

  return (

    <div className='main-tweet'>
      {feedThread.map((thread, index) =>(
        <div className='tweets'>
          
        </div>
      ))}
    </div>
  )
  }


export default Threads;