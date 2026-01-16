import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    useEffect(() => {
    
        if (count === 0) {
        navigate('/dashboard');
        return;
        }
        const timer = setInterval(() => {
        setCount((prev) => prev - 1);
        }, 1000);

        
        return () => clearInterval(timer);
        }, [count, navigate]);
    return(
        <div>
            <h1>Redirecting in...</h1>
            <h2>{count}</h2>
        </div>
    )
}
export default Home;