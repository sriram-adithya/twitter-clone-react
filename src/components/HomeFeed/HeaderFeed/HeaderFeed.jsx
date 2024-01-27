import React, { useState, useEffect } from 'react';
import '../HeaderFeed/HeaderFeed.css'

const HeaderFeed = ( onPostTweet) => {
  const [twitterData, setTwitterData] = useState(null);
  const [activeTab, setActiveTab] = useState('For You');

  const[tweetText, setTweetText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API link
        const response = await fetch('https://sandbox.nextleap.app/page/fetch');
        const data = await response.json();
        setTwitterData(data);
      } 
      catch (error) {
        console.error('Error fetching Twitter data:', error);
      }
    };

    fetchData();
  }, []);

  if (!twitterData) {
    return <div>Loading...</div>;
  }

  const handleActive = (tweetTab) => {
    setActiveTab(tweetTab);
  };

  const handleTweetChange = (e) =>{
    console.log(setTweetText(e.target.value));
  }

  const handlePostTweet = () =>{
      if(tweetText.trim()!==""){
        onPostTweet({
          id:Date.now(),
          user: {
          userName: twitterData.loggedInUser.userName,
          userId: twitterData.loggedInUser.userId,
          imageData: twitterData.loggedInUser.imageData,
          blueTick: twitterData.loggedInUser.blueTick,
          },
          text: tweetText,
          tweetTime : Date.now(),
        });
        setTweetText("")
      }
  }

  return (
    <div className='top-bar'>
      <h1 className='home-text'>{twitterData.headerData.title.text}</h1>
      <div className='nav-tab'>
        <span 
         onClick={ () => handleActive('For You') }
         className={activeTab ==='For you'? 'active' : ''}>
         <a href="/">
          For You
         </a>
          </span>
        <span onClick={handleActive}
        className={activeTab ==="Following"? 'active': ''}><a href="/">Following</a></span>
      </div>

      {/* Form section */}

      <div className='tweet-editor'>
        <div className='inside-form'>
          <img src={twitterData.loggedInUser.imageData.url} alt={twitterData.loggedInUser.imageData.alt}/>
          <input className='search' value={tweetText} onChange={handleTweetChange} type='text' placeholder="What's happening?"/>
        </div>
        <div className='btn'>
          <div className='post-button'>
            <button onClick={handlePostTweet}>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeed;