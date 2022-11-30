import React from 'react'
import "./rightbar.css"
import ad from '../../../src/assets/ad.png';
import gift from '../../../src/assets/gift.png';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={gift} alt="gift" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={ad} alt="ad" style={{height:"18em",width:"20em"}}/>
      </div>
    </div>
  )
}

export default Rightbar