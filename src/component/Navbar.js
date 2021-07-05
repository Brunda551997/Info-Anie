import React,{useState} from 'react'
import * as ImIcons from 'react-icons/im';
import {Link} from 'react-router-dom'
import {Sidebardata} from './Sidebardata';
import * as FaIcons from "react-icons/fa";
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar,setsidebar]=useState(false)
    const showsidebar=()=>setsidebar(!sidebar)
   
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
           <div className="navbar">
            <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showsidebar}/>
            </Link>   
            </div> 
            <nav className={sidebar ?"nav-menu active": 'nav-menu'}>
                <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <ImIcons.ImPacman size={25} style={{color:'black'}}/>
                    </Link>
                </li>
                {Sidebardata.map((items,index)=>{
                    return(
                        <li key={index} className={items.cName}>
                            <Link to={items.path}>
                                {items.icons}
                                <span>{items.title}</span>
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
