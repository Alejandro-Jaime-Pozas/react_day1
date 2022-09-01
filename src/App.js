import { useState } from 'react';
import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
import Racers from './components/Racers';
import RacersClass from './components/RacersClass';
import { Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Register from './components/Register';

function App() {
    console.log('hello')

    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                {/* setup the routes, so that only those elements get re-rendered when called and so not every element on site is re-rendered */}
                <Routes>
                    <Route path='/' element={<ButtonCounter />} />
                    <Route path='/standings' element={<Racers />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
                {/* <ButtonCounter />
                <Racers  /> */}
                {/* <RacersClass /> */}
            </div>
        </>
    )
}

export default App;
