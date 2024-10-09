import { useState, useEffect } from "react"
import { register } from '../../utils/auth';
import { useNavigate} from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { Link } from 'react-router-dom';

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    
    useEffect(() => {
        if(isLoggedIn()){
            navigate('/');
        }
    },[isLoading, isLoggedIn, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const { error } = await register(
            fullName, 
            email, 
            phone, 
            password, 
            confirmPassword);
        if (error) {
            alert(JSON.stringify(error));
        } else{
            navigate('/');
        }
    }


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input 
          type="text" 
          id="fullName" 
          name="fullName" 
          placeholder='Full Name'
          autoComplete="given-name"
          onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder='example@email.com'
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input 
          type="text" 
          id="phone" 
          name="phone" 
          placeholder='Phone number' 
          onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <button type="submit" disabled={isLoading}>Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Register
