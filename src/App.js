import { useState } from 'react';
import ButtonCounter from './components/ButtonCounter';
import Navbar from "./components/Navbar";
import Racers from './components/Racers';
import RacersClass from './components/RacersClass';
import { Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Register from './components/Register';
import AlertMessage from './components/AlertMessage';
import Login from './components/Login';

function App() {
    // console.log('hello')
    // set a state for an alert msg. if there is a msg, show its content (str) if not, dont show message
    const [message, setMessage] = useState(null); 
    const [category, setCategory] = useState(null); 
    
    // inserting a flash msg and category to a fn so that it can be pushed as a prop to other js files
    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                {/* set a state for an alert msg. if there is a msg, show its content (str) if not, dont show message */}
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null }
                {/* setup the routes, so that only those elements get re-rendered when called and so not every element on site is re-rendered */}
                <Routes>
                    <Route path='/' element={<ButtonCounter />} />
                    <Route path='/standings' element={<Racers />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                {/* <ButtonCounter />
                <Racers  /> */}
                {/* <RacersClass /> */}
            </div>
        </>
    )
}

export default App;
