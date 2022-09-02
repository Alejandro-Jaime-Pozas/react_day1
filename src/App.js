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
import CreatePost from './components/CreatePost';

function App() {
    // console.log('hello')
    // Date obj gives us the date, 
    const now = new Date();
    // set a state for an alert msg. if there is a msg, show its content (str) if not, dont show message
    const [message, setMessage] = useState(null); 
    const [category, setCategory] = useState(null); 
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > now) ? true : false) // this gives us the date 
    
    // inserting a flash msg and category to a fn so that it can be pushed as a prop to other js files
    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    const login = () => {
        setLoggedIn(true)
    }
    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('expiration')
        setLoggedIn(false)
    }


    return (
        <>
            <Navbar name='Brian' city='Chicago' logout={logout}/>
            <div className='container'>
                {/* set a state for an alert msg. if there is a msg, show its content (str) if not, dont show message */}
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null }
                {/* setup the routes, so that only those elements get re-rendered when called and so not every element on site is re-rendered */}
                <Routes>
                    <Route path='/' element={<ButtonCounter />} />
                    <Route path='/standings' element={<Racers />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} login={login} />} />
                    <Route path='/create_post' element={<CreatePost />} />
                </Routes>
                {/* <ButtonCounter />
                <Racers  /> */}
                {/* <RacersClass /> */}
            </div>
        </>
    )
}

export default App;
