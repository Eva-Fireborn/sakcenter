import React from 'react';
import SCpic from '../../img/lampcenterRek.jpg';
import './home.scss';

const Home= () => {
    return (
        <div className="homeWrapper">
            <img className="mainPic" src={SCpic} alt="sakcenter" />
        </div>
    )
}
export default Home;