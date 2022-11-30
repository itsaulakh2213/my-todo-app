import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Navbar.css"
export default function Navbar() {

  return (
    <Fragment>
        <section className='Navbar-Container'>
            <NavLink className="Navbar" exect to="/"><HomeIcon className="NavbarItem" fontSize="large"/></NavLink>
           <NavLink className="Navbar" exect to="/post"><CreateNewFolderIcon fontSize="large"/></NavLink>
           <NavLink className="Navbar" exect to="/profile"><AccountCircleIcon fontSize="large"/></NavLink>
        </section>
    </Fragment>
  )
}
