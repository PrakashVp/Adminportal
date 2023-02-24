import React, { useState } from 'react';
import { } from "react-icons/fc";
import logo from '../wendtlogo.png';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";





import{

  FaBars,
  FaThList,
  FaTruckMoving,
  FaShoppingCart,
  FaRegChartBar,
  FaUserFriends,
  FaUserCheck,
  FaCommentAlt,
  FaRegIdCard,
  

}
from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const [isOpen ,setIsOpen  ] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
{
       path:"/",
       name:"Customer Masters",
       icon: <FaUserFriends/>
},
{
      path:"/DealerMasters",
      name:"Dealer Masters",
      icon: <FaUserCheck/>
},

{
    path:"/ProductMasters",
    name:"Product Masters",
    icon:<MdOutlineProductionQuantityLimits/> 
},
{
  path:"/MaterialMasters",
  name:"Material Masters",
  icon: <FaCommentAlt/>
},
{
  path:"/RegionalHeads",
  name:"Regional Heads",
  icon: <FaRegIdCard/>
},
{
  path:"/SalesEngineers",
  name:"Sales Engineers",
  icon: <FcSalesPerformance/>
},
{
  path:"/Enquiries",
  name:"Enquiries",
  icon: <FaThList/>
},
{
  path:"/OrderBooking",
  name:"Order Booking",
  icon: <FaShoppingCart/>
},
{
  path:"/ProductDelivery",
  name:"Product Delivery",
  icon: <FaTruckMoving/>
},
{
  path:"/Reports",
  name:"Reports",
  icon: <FaRegChartBar/>
},




]
  return (
    <div className="container">
      <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
        <div className="top_section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
            <img src={logo} alt='logo' className="wendtlogo" />
            
           

          </h1>
          <div style={{marginLeft: isOpen ? "150px" : "0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
            
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
    
    
  );
};

export default Sidebar;
