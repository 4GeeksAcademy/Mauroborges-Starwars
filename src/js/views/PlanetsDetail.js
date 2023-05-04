import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";
import { useParams } from "react-router-dom";



export const PlanetsDetail = (planets) => {

const {store, actions} = useContext(Context)
const {planetsId}=useParams()
useEffect(()=>{
	actions.fetchPlanetsDetail(planetsId) 
	

},[])
console.log(store.planet)
return (
	<div className="text-center mt-5">
	
		<h1>Planet Details</h1>
        <h2>Id: {planetsId} </h2>
		<h2>Name: {store.planet?.properties?.name || "Cargando"}</h2>
        <h2>Climate: {store.planet?.properties?.climate || "Cargando"}</h2>
        <img src = {"https://starwars-visualguide.com/assets/img/planets/"+planetsId+".jpg"}></img>
            {/* {planets && Object.entries(planets).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} onError={imgError} alt="planet"/> : <h5>{key}: {value}</h5>}
                </div>
            ))} */}
		

		
	</div>
);

}
	
