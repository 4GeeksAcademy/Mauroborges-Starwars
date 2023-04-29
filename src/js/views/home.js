import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";

export const Home = () => {

const {store, actions} = useContext(Context)
useEffect(()=>{
	actions.fetchStarWars("planets",2) 
	actions.fetchStarWars("people") 
	actions.fetchStarWars("vehicles") 

},[])
return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<ListHorizontal element="planets" />
		<ListHorizontal element="people" />
		<ListHorizontal element="vehicles" />
	</div>
);

}
	
