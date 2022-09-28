import React from 'react';
import './About.css'

const About = ({about}) => {
    let time =0;
    let Shipping =0;

    for(const instrument of about){
          time=time+instrument.time;
          
    }
    return (
        <div className='cart-contain'>
        <div>
            <img src="" alt="" />
            <div>
            <h4>Tanvir Hasan Sohan</h4>
            </div>
            
        </div>
        
        <p>Total Price : ${time} </p>
        
        

        
         
    </div>
    );
};

export default About;