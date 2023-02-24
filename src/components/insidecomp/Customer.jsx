import React from "react";
import '../style/Customer.css';
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Customer = ({Children}) => {
    const adminItem=[
        {
          path:"/account",
          name:"Account",
          para:"Manage account information and and",
          icon:<RxDashboard/>
        },
        {
          path:"/project",
          name:"Project",
          para:"Manage account information and and",
          icon:<AiOutlineFundProjectionScreen/>
        },
        {
          path:"",
          name:"Workspace",
          para:"Manage account information and and",
          icon:<MdWorkspacesOutline/>
        },
        {
          path:"",
          name:"Analytics",
          para:"Manage account information and and",
          icon:<MdOutlineAnalytics/>
        },
        {
          path:"",
          name:"Admin",
          para:"Manage account information and and",
          icon:<RiAdminLine/>
        },
        {
            path:"",
            name:"Analytics",
            para:"Manage account information and and",
            icon:<MdOutlineAnalytics/>
          },
             
          
            
      ]
  return (
    <>
    <div className='heading'>
      <h1 className='account-gap'>Customer Dashboard</h1>
      <p className='paragraph'>Mange account configurations and customizations for your service desk</p>
      {       
          adminItem.map((item,index)=>(
          
     <div className='admin-model'>
            <Link to={item.path} key={index} className='admin-box' >
              <div className='admin-icon'>{item.icon}</div>
              <div className="name">{item.name}</div>
              <div>{item.para}</div>
            </Link>
            </div>
               
          
          ))
        } 
    </div>
    <div className='line'></div>
    <main>{Children}</main> 

    </>
  )
}

export default Customer;
