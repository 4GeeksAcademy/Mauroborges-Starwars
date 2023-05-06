import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";

export const People = () => {

const {store, actions} = useContext(Context)
useEffect(()=>{
	actions.fetchStarWars("people") 
	

},[])
return (
	<div className="text-center mt-5">
	
		<ListHorizontal element="people" />
		
		

		
	</div>
);

}
	
