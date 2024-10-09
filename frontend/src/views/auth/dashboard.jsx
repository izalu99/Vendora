
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth';

const Dashboard = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <div>
      {isLoggedIn()
        ? <div>
                <h1>Dashboard</h1>
                <Link to={`/logout`}>Logout</Link>
            </div>
        :<div>
            <h1>Home Page</h1>
            <Link to={`/login`}>Login</Link>
            <Link to={`/register`}>Register</Link>
        </div>
      
      }
    </div>
  )
}

export default Dashboard
