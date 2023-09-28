import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import ClimbingSessions from "../climbingSession/ClimbingSessions";
import ClimbingRoutesAndAreas from "../ClimbingRoutesAndAreas/ClimbingRoutesAndAreas";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent"
import AuthProvider, { useAuth } from "../context/AuthContext";
import ClimbingAreaPage from "../ClimbingRoutesAndAreas/ClimbingAreaPage";
import AddClimbingSession from "../climbingSession/AddClimbingSession";

function AuthenticatedRoute({children}) {
    const authContext = useAuth();

    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

function ClimbAppRoute() {

    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path="/" element={ <LoginComponent />} />
                        <Route path="/login" element={ <LoginComponent />} />

                        <Route path="/home/:username" element={ 
                            <AuthenticatedRoute> 
                            <Home />
                            </AuthenticatedRoute> } />
                        <Route path="/climbing-sessions" element={ 
                            <AuthenticatedRoute> 
                                <ClimbingSessions />
                            </AuthenticatedRoute>} />
                        <Route path="/add-climbing-session" element={ 
                            <AuthenticatedRoute> 
                                <AddClimbingSession />
                            </AuthenticatedRoute>} />
                        <Route path="/climbing-areas" element={
                            <AuthenticatedRoute> 
                                <ClimbingRoutesAndAreas />
                            </AuthenticatedRoute>} />
                        <Route path="/climbing-areas/:id" element={
                            <AuthenticatedRoute> 
                                <ClimbingAreaPage />
                            </AuthenticatedRoute>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default ClimbAppRoute;