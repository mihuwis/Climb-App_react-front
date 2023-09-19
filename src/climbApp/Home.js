import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home(){

    const navigate = useNavigate();
    const context = useAuth();
    const username = context.username;

    const goToSessions = () => {
        navigate('/climbing-sessions');
    }

    const goToAreas = () => {
        navigate('/climbing-areas');
    }

    return (
        <div className="container">
            <p>Hi { username }, good day for some climbing!</p>
            <button className="btn btn-light m-3" onClick={goToSessions}>All Climbing Sessions</button>

            <button className="btn btn-light m-3" onClick={goToAreas}>Climbing Areas / Routes </button>
        </div>
    )
}

export default Home;