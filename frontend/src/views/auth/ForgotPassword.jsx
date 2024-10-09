import { useState } from 'react'
import { Link } from 'react-router-dom';
import apiInstance  from '../../utils/axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        try{
            if(!email){
                alert('Please enter email')
            }
            apiInstance.get(`user/password-reset/${email}`).then((res) => {
                console.log(res.data)
            })
        } catch (error){
            alert('An error occurred connecting to the password reset endpoint.')
            console.log(error)
        }
        
    }
    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Enter email"
                autoComplete='off'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit">Reset Password</button>
            </form>
            <Link to="/login">Login</Link>
        </div>
  )
}

export default ForgotPassword
