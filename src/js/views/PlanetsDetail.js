import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";
import { useParams } from "react-router-dom";



export const PlanetsDetail = () => {

const {store, actions} = useContext(Context)
const {planetsId}=useParams()
useEffect(()=>{
	actions.fetchStarWars("planets") 
	

},[])
return (
	<div className="text-center mt-5">
	
		<h1>Planet Details</h1>
        <h2>Id: {planetsId} </h2>
		<h2>Name: {planets?.name || "Cargando"}</h2>
            {planets && Object.entries(planets).map(([key, value]) => (
                // key != "created" || key != "edited" || key != "url" &&
                <div key={key}>
                    {key== "img" ? <img src={value} onError={imgError} alt="planet"/> : <h5>{key}: {value}</h5>}
                </div>
            ))}
		

		
	</div>
);

}
	
