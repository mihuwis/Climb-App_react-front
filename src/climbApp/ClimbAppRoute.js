import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ClimbingSessions from "../climbingSession/ClimbingSessions";


function ClimbAppRoute() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/home/:username" element={ <Home />} />
                    <Route path="/climbing-sessions" element={ <ClimbingSessions />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ClimbAppRoute;