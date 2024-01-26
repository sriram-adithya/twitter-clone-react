import React, { useEffect, useState } from 'react'
import './Thread.css'
import bluetick from'./Tick icon.svg'
import replies from './Comment Stroke Icon.svg'
import likes from './Heart Stroke Icon.svg'
import retweet from './Retweet Stroke Icon.svg'
import share from './Share Stroke icon.svg'


const Threads = () => {
  const [tweetThreads, setTweetThreads] = useState([]);

  //to get decimal number from binary
   const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  };

  //function to convertTime from api response
  const convertTimestampToTime = (timestamp) => {
    const date = new Date(timestamp);
    
    const formattedTime = date.toLocaleString('en-GB',
    { day: 'numeric',
      month: 'short',
      year: 'numeric'
    }); 
    return formattedTime;
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API link
        const response = await fetch('https://sandbox.nextleap.app/page/fetch');
        const data = await response.json();
        setTweetThreads(data.tweetThreads);
      } catch (error) {
        console.error('Error fetching tweet threads:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main-feed'>
      { tweetThreads.map((thread,index) =>
        <div key={index} className='tweets'>
          <div className='img-container'>
          <img src={thread[0].user.imageData.url} alt={ thread[0].user.imageData.alt}/>
          </div>
          <div className='tweet'>
            <div className='user-info'>
            <p className='name'>
              { thread[0].user.userName}
            </p>
            {thread[0].user.blueTick ===true?<img className='blue-tick' src={bluetick} alt=''/> : "" }
            <p className='user-id'>
              @{thread[0].user.userId}
            </p>
            <p className='dot'>.</p>
            <p className='date'>
              {convertTimestampToTime(thread[0].tweetTime)}
            </p>
            </div>

            <div className='tweet-content'>
              <p className='text-area'>{ thread[0].textArea}</p>
            </div>
            {/* comment retweet like view buttons */}

            <div className='buttons-container'>
              <div className='comment'>
                <img src={replies} alt=''/>
                <p>{formatNumber(thread[0].replies)}</p>
              </div>

              <div className='retweet'>
                <img src={retweet} alt=''/>
                <p>{formatNumber(thread[0].reTweets)}</p>
              </div>

              <div className='like'>
                <img src={likes} alt=''/>
                <p>{formatNumber(thread[0].likes)}</p>
              </div>

              <div className='share'>
              <img src={share} alt=''/>
              <p> {formatNumber(thread[0].views)}</p>
              </div>
              </div>

          </div>
        </div>
        

      )}
    </div>
  )
};
export default Threads;