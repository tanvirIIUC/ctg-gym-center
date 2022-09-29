import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Item from '../Items/Item';
import './Club.css'

const Club = () => {
    const [instruments, setInstrument] = useState([]);
    const [about,setabout]=useState([]);


    useEffect(()=>{
        fetch('ctgGym.json')
        
        .then(res => res.json())
        .then(data => {
            
             setInstrument(data);
        })
    }, [])
    const handleAddToCArd =(instrument)=>{
        
        const newabout = [...about,instrument]
        setabout(newabout);
        
        
    }

    
    return (
        <div className='main'>
            
            <div className="">
             <h2>Ctg-Gym-Center</h2>
             <h5>Choose today's done</h5>
            <div className='instrument'>
            {
                
                instruments.map(instrument=><Item 
                     key={instrument.id}
                    instrument={instrument}
                
                     handleAddToCArd ={handleAddToCArd}
                ></Item>)
             }
            </div>
            
        </div>
            
        

        <div className='instrument-contain'>
            {/* <Cart cart={cart}></Cart> */}
            <About about={about}></About>
        </div>
        
    </div>
    );
};

export default Club;