
import {useState, useEffect} from 'react';
import { login } from '../../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if(isLoggedIn()){
            navigate('/');
        }
    },[isLoggedIn, navigate]);

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const { error } = await login(email, password);
        if (error) {
            alert(error);
        } else{
            navigate('/');
            resetForm();
            
        }
        setIsLoading(false);
    }


    
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    autoComplete='off'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={isLoading}>Login</button>
                <Link to="/register">Register</Link>
                <Link to="/forgot-password">Forgot Password</Link>

            </form>
        </div>
    );
};

export default Login;