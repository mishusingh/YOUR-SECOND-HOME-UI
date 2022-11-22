import React from 'react';
import '../App.css';
import {Button} from './Button';
import './BodySection.css';

function BodySection() {
  return (
    <div className='body-container'>
        
        {/* <video src='/public/video-1.mp4' autoPlay loop muted /> */}
        <image src='/public/download.jpg' />
        <h1>FIND LIKE-MINDED ROOMMATES AND PGs</h1>
        <p>Share your room with right roommates</p>
        <div className='body-btns'>
            <Button className ='btns'
            buttonSize='btn--large'
            buttonStyle='btn--outline'                 
            >

                GET STARTED


            </Button>


        </div>
        
        

        
      
    </div>
  )
}

export default BodySection
