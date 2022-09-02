import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register(props) {

    let navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e);
        
        //Check that the passwords match
        let password = e.target.password.value; 
        let confirmPass = e.target.confirmPass.value; 
        if (password !== confirmPass){
            props.flashMessage('Your passwords do not match', 'danger')
            
            
        // HERE YOU ARE COPYING THE JS FETCH CODE SNIPPET FROM POSTMAN////////////////////////
        } else { 
            console.log('Passwords do match!')
            // set up request to flask app
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: password
            })

            fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){ // this checks for the API error that is in intro_to_flask code (400 error)
                        console.error(data.error)
                    } else{
                        // console.log(data)
                        props.flashMessage('You have successfully registered', 'success')
                        navigate('/')
                    }
                })
        }
    }

    return (
        <>
        <h4 className="text-center">Register</h4>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' placeholder='Enter Email' name='email'/>
                <br />
                <label htmlFor="username">Username</label>
                <input type="text" className='form-control' placeholder='Enter Username' name='username'/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' placeholder='Enter Password' name='password'/>
                <br />
                <label htmlFor="confirmPass">Confirm Password</label>
                <input type="text" className='form-control' placeholder='Confirm Password' name='confirmPass'/>
                <br />

                <input type="submit" value='Register' className='btn btn-primary w-100 mt-3' />
            </div>
        </form>

        </>
    )
}
