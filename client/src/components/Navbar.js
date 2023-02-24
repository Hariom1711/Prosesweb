import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"





const Navbar = () => {
    return (
      

<>


<header>
<nav className="navbar navbar-light bg-light justify-content-between">
  <a className="navbar-brand"><h2>Proses Web </h2></a>

  <form className="form-inline " style={{display:'flex' ,justifyContent:'space-between'}}>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</header>


</>


    )
}

export default Navbar