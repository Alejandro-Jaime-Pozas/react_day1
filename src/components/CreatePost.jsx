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
        props.flashMessage('You need to be logged in to view this page, please login', 'info')
        navigate('/login')
    };


    // need to check 

    return (
        <>
            <h4 className="text-center">Create a New Post</h4>
            {/* need to include a form onSubmit/onClick= to a fn */}
            <form >
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
