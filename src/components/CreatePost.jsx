// summary: 
// user must be logged in
// user inputs a title, body, clicks submit 
// once submitted, post is created by fetching api flask app 
// need to fetch api create post fn with the input data and push to the db through the api 
// when finished redirect the user to home page

import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function CreatePost(props) {

    // need to check if user login = true, then render page (check state of user login)
        // so for this..how check state? state is in App.js, need to allow CreatePost to get props from App.js, and in App.js only show if use logged in...so login method is all in App.js
    let navigate = useNavigate()
    if (props.loggedIn === false){
        props.flashMessage('You need to be logged in to create a post, please login', 'info')
        navigate('/login')
    };

    // handle the create post submission here: get form values . get the user token? since login is required? . post the created post by fetching api . flash success msg & navigate to home page
    const handleSubmit = e => {
        console.log('Creating post')
        // prevent the default of re-rendering the page
        e.preventDefault();
        // get the create post title and body inputs
        let title = e.target.title.value;
        let body = e.target.body.value;

        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('expiration'))
        
        let token = localStorage.getItem('token')
        console.log("Bearer " + token)

        // fetch api create post /api/posts? 
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");

        let formData = JSON.stringify({
            "title": title,
            "body": body
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
          };

        fetch('http://localhost:5000/api/posts', requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.error){ // this checks for the API error that is in intro_to_flask code (400 error)
                    console.error(data.error)
                } else{
                    // console.log(data)
                    props.flashMessage('You have created a new post successfully', 'success')
                    navigate('/')
                }
            })
    }


    return (
        <>
            <h4 className="text-center">Create a New Post</h4>
            {/* need to include a form onSubmit/onClick= to a fn */}
            <form onSubmit={handleSubmit} >
                <div className="form-group">

                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder='Enter Title' name='title'/>
                    <br />
                    <label htmlFor="body">Content</label>
                    <input type="text" className='form-control' placeholder='Enter Content' name='body'/>
                    <br />
                    <input type="submit" value='Create Post' className='btn btn-primary w-100 mt-3' />
                </div>
            </form>

        </>
    )
}
