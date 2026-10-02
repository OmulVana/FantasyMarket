import { useAuth } from "../AuthContext";
import { useNavigate } from 'react-router-dom'
import "../css/AuthButton.css";

export default function AuthButton() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const handleClick = () => {
        if (user) {
            // If user is logged in, log them out
            logout();
            navigate('/home');
        } else {
            // If user is not logged in, redirect to login page
            navigate('/login');
        }
    };

    return (
        <button className="auth-button" onClick={handleClick}>
            {user ? "Logout" : "Login"}
        </button>
    )
}