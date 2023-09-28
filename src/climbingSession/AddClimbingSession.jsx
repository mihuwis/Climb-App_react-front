import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCountriesNamesApi, getAllClimbingAreasInCountryApi } from "../api/AreasAndRoutesApiService";

function AddClimbingSession(){

    const {id} = useParams();
    const username = "Mihu";

    const [countryList, setCountryList] = useState([]);
    const [listOfClimbingAreas, setListOfClimbingAreas] = useState([])

    const [listOfClimbingLines, setListOfClimbingLines] = useState([])

    const [listOfClimbs, setListOfClimbs] = useState([])
    const [form, setForm] = useState({
        id: id,
        username: username,
        country: "any",
        area: 'any',
        routeName: 'any'
        // trzeba wskazac area z bazy danych i zassa listę dróg 
        // po wskazaniu drogi wypełni ILOŚC RUCHÓW. TRUDNOŚĆ pt

        // my uzupełniamy ile wykonanych i oblicza sie ilośc pkt , load, 

    })

    useEffect(() => {
            refreshCountryListDataData();
            refreshListOfClimbingAreas();}
            , [form])

    const refreshCountryListDataData = () => {
        
        getAllCountriesNamesApi()
            .then(response => setCountryList(response.data.map(item => ({value: item, show: item}))))
            .catch(error => console.log(error))
    }

    const refreshListOfClimbingAreas = () => {

        if(form.country === "any"){
            console.log("Any is selected")
            //TODO: list of random areas from all over the place 
        } else{
            console.log("List of climbing areas!")
            console.log(listOfClimbingAreas)
        getAllClimbingAreasInCountryApi(form.country)
            .then(
                res => setListOfClimbingAreas(res.data.map(item => ({ value: item, show: item}))))
            .catch(error => console.log(error))
        }
    }



    const handleNewEntry = () => {
        return (
            <div className="row">

            </div>
        )
    }

    const handleCountryChange = (e) => {

        setForm(prev => ({
            ...prev,
            country: e.target.value}));
    };

    const handleAreaChange = (e) => {
        console.log( e.target.value)
        setForm(prev => ({
            ...prev,
            area: e.target.value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="container">
            Add climb sesion
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <label>
                        Country:
                        <select value={form.country.value} onChange={handleCountryChange}>
                            <option value="any">Any</option>

                            {countryList.map(country => (
                            <option 
                                key={countryList.indexOf(country)} 
                                value={country.value}>{country.show}
                            </option>
                            ))}
                        
                        </select>
                    </label>
                </form>

                <form onSubmit={handleSubmit}>
                    <label>
                        Area:
                        <select value={form.area.value} onChange={handleAreaChange}>
                            <option value="any">Any</option>

                            {listOfClimbingAreas.map(area => (
                            <option 
                                key={listOfClimbingAreas.indexOf(area)} 
                                value={area.value}>{area.show}
                            </option>
                            ))}
                        
                        </select>
                    </label>
                </form>
            </div>

            <button className="btn btn-success" onSubmit={handleNewEntry}>Add Route</button>
        </div>
    )
}

export default AddClimbingSession;