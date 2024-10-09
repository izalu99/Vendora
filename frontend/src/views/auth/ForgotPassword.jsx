import { useState } from 'react'
import { Link } from 'react-router-dom';
import apiInstance  from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit =  async() => {
        if(!email){
            alert('Please enter email')
        }
        try{
            await apiInstance.get(`user/password-reset/${email}`)
            .then((res) => {
                alert('An email has been sent to you to reset and change your password.')
                //console.log(res)
                navigate('/create-new-password')
            })
        } catch (error){
            alert('Email not found. Please enter a valid email.')
            console.log(error)
        }
        
    }
    return (
        <div>
            <h1>Forgot Password</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Enter email"
                autoComplete='off'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Reset Password</button>
            </div>
            <Link to="/login">Login</Link>
        </div>
  )
}

export default ForgotPassword
