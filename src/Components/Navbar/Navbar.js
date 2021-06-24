import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
// import { UserContext } from "../../App";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);


  const [admin,setAdmin] =useState(false)

useEffect(() => {
    fetch("https://secure-reaches-57604.herokuapp.com/isAdmin",{
      method: 'POST',
      headers: {"content-type": 'application/json'},
      body:JSON.stringify({email:loginUser.email})
    
    })
    .then(res => res.json())
    .then(data => setAdmin(data));

},[])


  return (
    <div class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link to="/"><i>Click Bazz</i></Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">





          { admin &&  <div className="admin">
              <a class="nav-link " href="#">
                <Link to="/dashboard"><span className="brand-color">Admin</span></Link>
                </a>
            </div>}





              <a class="nav-link" href="">
                <Link to="/">Home</Link>
              </a>
              <a class="nav-link" href="">
                <Link to="/blog">blog</Link>
              </a>
            
              <a class="nav-link" href="">
                <Link to="/ourTeam">Our Team</Link>
              </a>
              <a class="nav-link" href="">
                <Link to="/contact">Contact us</Link>
              </a>

              <a class="nav-link" href="">
       
                <div>



                  {loginUser.isSignedIn ? (
                    <Link to="/login"><b> {loginUser.name}</b></Link>
                  ) : (
                    <Link class="login-btn" to="/login">
                      Login
                    </Link>
                  )}
                </div>
                {/* <Link class="login-btn" to="/login">Login</Link> */}
              </a>



            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
