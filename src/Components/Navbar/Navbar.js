import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
// import { UserContext } from "../../App";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);


  
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
              <a class="nav-link" href="#">
                <Link to="/">Home</Link>
              </a>
              <a class="nav-link" href="#">
                <Link to="/orders">Review</Link>
              </a>
              <a class="nav-link" href="#">
                <Link to="/dashboard">Admin</Link>
              </a>
              <a class="nav-link" href="#">
                <Link to="/deals">Contact</Link>
              </a>

              <a class="   nav-link" href="#">
                {/* {loginUser.isSignedIn && (
        <div className='user-sec'>
          <p>welcome! {loginUser.name}</p>
        </div>
      ) } */}




{/* <Link class="login-btn" to="/login">
                      Login
                    </Link> */}
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
