import { useNavigate, useParams } from "react-router-dom";

function Home(){

    const { username } = useParams();
    const navigate = useNavigate();

    const goToSessions = () => {
        navigate('/climbing-sessions');
    }

    return (
        <div>
            <p>Hi { username }, good day for some climbing!</p>
            <button className="btn button-green" onClick={goToSessions}>All Climbing Sessions</button>
        </div>
    )
}

export default Home;