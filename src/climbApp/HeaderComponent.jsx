import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

function HeaderComponent(){

    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    const handleLogout = () => {
        useAuth.logout();
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/home/:username">CLIMB APP</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                { isAuthenticated && 
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link"to="/home/:username">
                                        Home</Link></li>}
                                { isAuthenticated && 
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link"to="/climbing-sessions">
                                        Sessions</Link></li>}
                                { isAuthenticated && 
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link"to="/climbing-areas">
                                        Areas/Routes</Link></li>}
                            </ul>
                        </div>
                            <ul className="navbar-nav">
                                { isAuthenticated && 
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link">
                                        Profile</Link></li>}
                                { !isAuthenticated && 
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link">
                                        Login</Link></li>}
                                { isAuthenticated && 
                                    <li className="nav-item fs-5">
                                        <Link className="nav-link" onClick={handleLogout}>
                                        Logout</Link></li>}
                            </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;