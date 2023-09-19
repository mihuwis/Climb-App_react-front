import { useEffect, useState } from "react";
import { getAllAreasAndRoutesApi } from "../api/AreasAndRoutesApiService";
import { useNavigate } from "react-router-dom";

function ClimbingRoutesAndAreas(){

    const [climbingAreas, setClimbingAreas] = useState([]);
    const navigate = useNavigate();

    useEffect (() => refreshClimbingAreas(), []);

    function refreshClimbingAreas(){
        getAllAreasAndRoutesApi()
        .then(response => {
            console.log(response)
            setClimbingAreas(response.data)    
        })
        .catch(error => console.log(error))
    }

    const showClimbingArea = (id) => {
        navigate(`/climbing-areas/${id}`)
    }

    return (
        <div className="container">
            <div>Filters here</div>
            <div>Description of Area here</div>
            <div>List of filtered Routes here
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Area name</th>
                            <th>Country</th>
                            <th>Number of routes</th>
                            <th>Outdoor/Indoor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            climbingAreas.map(elem=> (
                                <tr onClick={() => showClimbingArea(elem.id)} key={elem.id}>
                                    <td>{elem.nameOfArea}</td>
                                    <td>{elem.country}</td>
                                    <td>{elem.climbingLines.length}</td>
                                    <td>{elem.outdoor ? "Outdoor" : "Gym"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClimbingRoutesAndAreas;