import React, { useEffect, useState } from 'react'
import './Trending.css'

const Trending = () => {

    const[trendingData,settrendingData] = useState([]);


    const formatNumber = (number) => {
        if (number >= 1000) {
          return (number / 1000).toFixed(1) + 'K';
        } else {
          return number.toString();
        }
      };

      
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data from your API link
            const response = await fetch('https://sandbox.nextleap.app/page/fetch');
            const data = await response.json();
            settrendingData(data.trendingData.trends);
          } 
          catch (error) {
            console.error('Error fetching Twitter data:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div className='trending-container'>
        <div className='wrapper'>
            <div className='title'>What's happening</div>

                <div className='trend'>
                    <div className='content'>
                        {trendingData.length >0 && (
                            <>
                            <p className='country'>Trending in {trendingData[0].country}</p>
                            <p className='hashtag-text'>{trendingData[0].text}</p>
                            <p className='tweets-num'>{formatNumber(trendingData[0].tweets)} Tweets</p>
                            </>
                        )}
                    </div>
                    {/* content - 2 */}
                    <div className='content2'>
                      {trendingData.length >0 && (
                        <>
                          <p className='sports'>{ trendingData[1].category}<span className='span-dot'>·</span> Trending</p>
                          <p className='cricket'>{ trendingData[1].text}</p>
                          <p className='trending-text'>Trending with 
                          <span className='hastag-trending'>{ trendingData[1].hashTags[0]}</span> <span className='hastag-trending'>{ trendingData[1].hashTags[1]}</span>
                          </p>
                        </>
                      )}
                    </div>

                    {/* content - 3  */}

                    <div className='content3'>
                      {trendingData.length >0 && (
                        <>
                          <p className='category'>{ trendingData[2].category}<span className='span-dot'>·</span> Trending</p>
                          <p className='text-must'>{trendingData[2].text}</p>
                          <p className='tweets-num'>{formatNumber(trendingData[2].tweets)} Tweets</p>
                        </>
                      )}

                    </div>

                    {/* content - 4  */}

                    <div className='content4'>
                      {trendingData.length >0 && (
                        <>
                          <p className='category2'>{ trendingData[3].category}<span className='span-dot'>·</span> Trending</p>
                          <p className='captain'>{trendingData[3].text}</p>
                          <p className='trending-text'>
                            Trending with <span className='hastag-trending'>{ trendingData[3].hashTags[0]}</span> <span className='hastag-trending'>{ trendingData[3].hashTags[1]}</span>
                          </p>
                        </>
                      )}
                    </div>

                    <div className='show-more-div'>
                        <p className='show-more-text'>Show More</p>
                    </div>


                </div>


        </div>
    </div>
  )
}

export default Trending