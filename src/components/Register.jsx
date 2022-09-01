import React from 'react'

export default function Register() {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
        <h4 className="text-center">Register</h4>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' placeholder='Enter Email' name='email'/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' placeholder='Enter Username' name='username'/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="password" className='form-control' placeholder='Enter Password' name='password'/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' placeholder='Confirm Password' name='confirmPass'/>
                <br />

                <input type="submit" value='Register' className='btn btn-primary w-100 mt-3' />
            </div>
        </form>

        </>
    )
}
