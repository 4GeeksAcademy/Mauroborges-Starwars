import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import ListHorizontal from "../component/listHorizontal";

export const Planets = () => {

const {store, actions} = useContext(Context)
useEffect(()=>{
	actions.fetchStarWars("planets") 
	

},[])
return (
	<div className="text-center mt-5">
	
		<ListHorizontal element="planets" />
		<nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
		

		
	</div>
);

}
	
