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
        <div className='user-info'>
            <img src="" alt="" />
            <div>
            <h4>Tanvir Hasan Sohan</h4>
            <small>Chittagong,Bangladesh</small>
            </div>
            <div className='user-details'>
               <div>
                <h4>60</h4>
                <small>Weight</small>
               </div>
               <div>
                <h4>6.5</h4>
                <small>Height</small>
               </div>
               <div>
                <h4>22</h4>
                <small>Age</small>
               </div>
            </div>
            
        </div>

        <h4>Add A Break</h4>
        <div className='break-time-contain'>
           <div><button><p>10s</p></button></div>
           <div><button><p>20s</p></button></div>
           <div><button><p>30s</p></button></div>
           <div><button><p>40s</p></button></div>
           <div><button><p>50s</p></button></div>
        </div>
    
    <h4>Exercise Details</h4>
     <div className='time'>
        <p>Exercise time    {time}</p>
     </div>
     <div className='time'>
        <p>Break time    </p>
     </div>
       
     <button id='btn'>
          <p>Activity Completed</p>
     </button>
        

        
         
    </div>
    );
};

export default About;