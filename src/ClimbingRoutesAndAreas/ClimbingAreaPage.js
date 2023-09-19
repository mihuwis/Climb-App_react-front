import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAreaByIdApi } from "../api/AreasAndRoutesApiService"

function ClimbingAreaPage(){

    const { id } = useParams();
    const [areaDescription, setAreaDescription] = useState({});

    useEffect(() => getAreaDescription(), []);

    const getAreaDescription = () => {
        getAreaByIdApi(id)
        .then(result => {
            setAreaDescription(result.data);
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2> { areaDescription.nameOfArea } </h2>
        </div>
    )
}

export default ClimbingAreaPage