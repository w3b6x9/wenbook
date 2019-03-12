import React from 'react';
import { Link } from 'react-router-dom';

const AdsSection = () => {
  return (
    <div className='adv-section'>
      <div className='create-ad'>
        Create Ad
      </div>
      <a href='https://wenbo.herokuapp.com' target='_blank' className='adv-link'>
        <div>
          <img src='https://s3.us-east-2.amazonaws.com/wenbook-dev/misc/wenbook-home.png'
            className='img-ad'
            />
          <div className='body-adv'>
            <div className='title-adv'>wenbook</div>
            <div className='title-adv'>wenbo.herokuapp.com</div>
            <div className='desc-adv'>Check out one of the best social networking apps ever made...</div>
          </div>
        </div>
      </a>
      <a href='http://www.prok.fun' target='_blank' className='adv-link'>
        <div>
          <img src='https://s3.us-east-2.amazonaws.com/wenbook-dev/misc/prok-game.png'
            className='img-ad'
            />
          <div className='body-adv'>
            <div className='title-adv'>prok</div>
            <div className='title-adv'>prok.fun</div>
            <div className='desc-adv'>Defeat your boredom with an interactive shooter game...</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdsSection;
