import React, { useState, useEffect } from 'react';
import './HeaderData.css'
const HeaderData = () => {
  const [twitterData, setTwitterData] = useState(null);

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


  return (
    <div className='top-bar'>
      <h1 className='home-text'>{twitterData.headerData.title.text}</h1>
    </div>
  )};

  export default HeaderData;