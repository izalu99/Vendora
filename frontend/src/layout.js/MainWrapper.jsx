import { useEffect, useState } from 'react';
import { setUser } from '../utils/auth';


const MainWrapper = ({ children } ) => {
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const handler = async () => {
            setLoading(true);
            await setUser();
        }
        handler();
        setLoading(false);
    }, [])

    return (
        <div>
            {loading ? null: children }
        </div>
    )
}

export default MainWrapper;