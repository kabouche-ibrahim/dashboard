import React, { Children } from 'react';
import{
<<<<<<< HEAD
    FaRegChartBar,
    FaTh,
    FaSignOutAlt,
} from "react-icons/fa"
=======
    FaBars,
    FaRegChartBar,
    FaTh,
}from "react-icons/fa"
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
import { AiFillFolderOpen, IconName } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from "./cnr.png";
<<<<<<< HEAD
import "./Sidebar.css";


const Sidebar = ({children}) => {
=======
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
    const menuItem=[
        {
            path:"/",
            name:"dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Demandes",
            name:"demandes",
            icon:<AiFillFolderOpen/>
        },
        {
            path:"/Stats",
            name:"stats",
            icon:<FaRegChartBar/>
        },
<<<<<<< HEAD
    ]

    const handleLogout = () => {
        window.location.reload();
    }

    return (
        <div className="container">
              
           <div style={{width:  "200px" }} className="sidebar">
               <div className="top_section">
                    {/*<Navbar/>*/}
                   <h1 style={{display:  "block" }} className="logo"><img src={logo} width={60} height={50} /></h1>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display:"block" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className="link" onClick={handleLogout}>
                   <div className="icon"><FaSignOutAlt/></div>
                   <div style={{display:  "block"  }} className="link_text">logout</div>
               </div>
=======

    ]


    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={logo} width={60} height={50} /></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
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
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
           </div>
           <main>{children}</main>
        </div>
    );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
