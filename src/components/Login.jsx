import React from 'react'
import { useNavigate } from 'react-router-dom'; // useNavigate used to redirect to another page

export default function Login(props) {

    let navigate = useNavigate();

    // make async fn here
    const handleSubmit = async e => {
        e.preventDefault();
        console.log('Logging in');
        
        let username = e.target.username.value;
        let password = e.target.password.value;

        // POSTMAN CODE SNIPPET to get the username and password
        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Basic ' + btoa(`${username}:${password}`)) // COME BACK TO UNDERSTAND THIS

        let response = await fetch('http://localhost:5000/api/token', {headers:myHeaders}); // COME BACK TO UNDERSTAND THIS
        if (response.ok){
            let data = await response.json();
            // console.log(data)
            // END POSTMAN CODE SNIPPET - this snippet is shorter than the one shown on postman...
    
            // sotre the token and expiration in localStorage Application
            localStorage.setItem('token', data.token);
            // console.log(localStorage.getItem('token'))
            localStorage.setItem('expiration', data.token_expiration)
            // console.log(localStorage.getItem('expiration'))

            // set the logged in fn to true
            props.login()
    
            // flash success msg and nagivate back to home page
            props.flashMessage('You have logged in successfully', 'success');
            navigate('/');
        } else {
            props.flashMessage('Your username/password are incorrect', 'danger');
            navigate('/');
        }
    }

    return (
        <>
        <h4 className="text-center">Login</h4>
        <form onSubmit={handleSubmit}>
            <div className="form-group">

                <label htmlFor="username">Username</label>
                <input type="text" className='form-control' placeholder='Enter Username' name='username'/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' placeholder='Enter Password' name='password'/>
                <br />

                <input type="submit" value='Login' className='btn btn-primary w-100 mt-3' />
            </div>
        </form>

        </>
    )
}
