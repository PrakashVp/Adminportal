import React from 'react'
import '../style/Topnav.css'
import { ImSearch } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
const Topnav = () =>{

     

    return(
    <>
    <div className='header'>
        <div className="wrapper">
        <div className="searchBar">
        <input className="searchQueryInput" name="searchQueryInput" placeholder="Search...."  />
        <button className="searchQuerySubmit" type="submit" name="searchQuerySubmit"><ImSearch/></button>
        <button className='notifi-icon'><IoIosNotificationsOutline/></button>
        
        </div>
        </div>
        </div>
        <div className='top'></div>
        </>
    )
    
}
export default Topnav;
