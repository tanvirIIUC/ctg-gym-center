

import { useState } from 'react';
import './About.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = ({about}) => {
    let time =0;
    
    const notify = () => toast("Wow so easy!");
    for(const instrument of about){
          time=time+instrument.time;
          
    }
     
    const [breaktime,setBreaktime]=useState('');

    const HandleTime = (props)=>{
         console.log(props)
         setBreaktime(props);
    }
    localStorage.setItem('breakTime',breaktime);
    
    return (
        <div className='cart-contain'>
        <div className='user-info'>
            <img src="" alt="" />
            <div className='user'>
               <div>
                  <img src='sohan.jpeg' alt="" />
               </div>
               <div>
               <h4>Tanvir Hasan Sohan</h4>
               <small>Chittagong,Bangladesh</small>
               </div>
            
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
           <div onClick={()=>HandleTime(10)}><button><p>10s</p></button></div>
           <div onClick={()=>HandleTime(20)}><button><p>20s</p></button></div>
           <div onClick={()=>HandleTime(30)}><button><p>30s</p></button></div>
           <div onClick={()=>HandleTime(40)}><button><p>40s</p></button></div>
           <div onClick={()=>HandleTime(50)}><button><p>50s</p></button></div>
        </div>
    
    <h4>Exercise Details</h4>
     <div className='time'>
        <p>Exercise time    {time}s</p>
     </div>
     <div className='time'>
         
        <p>Break time  {breaktime} </p>
     </div>
       
       
     <button onClick={notify}  id='btn'>
          <p>Activity Completed</p>
     </button>
     <ToastContainer />

        

        
         
    </div>
    );
    
};

export default About;