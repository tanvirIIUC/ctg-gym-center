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
            <div className='blogs'>
                <h3>Blogs</h3>
                <div>
                    <h4>How does react work?</h4>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
                </div>
                <div>
                    <h4>Difference between props and state?</h4>
                    <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                </div>
                <div>
                    <h4> Where useEffect use without data load?</h4>
                    <p>It will be called every time the component renders (e.g. props change, hook state changes). Try it. That will give you an infinite loop, since every time you update the state with getUsers, it'll re-render, triggering another request, triggering another render</p>
                </div>
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