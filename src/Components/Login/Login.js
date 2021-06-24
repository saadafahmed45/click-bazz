import React, { useContext } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
// import Header from '../Header/Header';
import GoogleLogo from "../Login/social-logo/google.png";
import FacebookLogo from "../Login/social-logo/facebok.png";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import Navbar from "../Navbar/Navbar";

function Login() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loginUser, setLoginUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const handleSign = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email,photoURL };
        const signInUsers = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        };
        setLoginUser(signInUsers);
        history.replace(from);
        alert('login successfully');

        console.log(email, displayName, photoURL);
      })

      .catch((err) => {
        console.log(err);
        console.log(err.massage);
      });
  };

  const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { displayName, email, photoURL } = result.user;
        const FbSignedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(FbSignedInUser);
        setLoginUser(FbSignedInUser);
        history.replace(from);
        console.log(photoURL, email, displayName);
      }, [])
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedUser = {
          isSignedIn: false,
          name: "",
          photo: "",
          email: "",
          error: "",
          success: false,
        };
        setUser(signedUser);
      })
      .catch((err) => {});
  };
  const handleBlur = (e) => {
    let isFieldValid;

    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };

      newUserInfo[e.target.name] = e.target.value;
      console.log(newUserInfo);
      setUser(newUserInfo);
      setLoginUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);

          updateUserName(user.name[0]);

          // Signed in

          console.log(user.name, user.password, user);
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);

          setLoginUser(setUser);
          history.replace(from);
          console.log("sign in user info", userCredential.user);
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <section className="login">   
         <div className="container text-center">
        <div>
          {loginUser.isSignedIn && (
            <div className="user-sec">
              <img src={loginUser.photo} alt="" />
              <h3>welcome! {loginUser.name}</h3>
              <p>Your Email:-{loginUser.email}</p>
              {/* <img src={user.photo} alt="" /> */}
            </div>
          )}
        </div>
        <div className="row login-box">
          <div className="col-12 ">
            <div className="form-section ">
              <h3 className="create">Login Your Account</h3>

              <form onSubmit={handleSubmit}>
                {newUser && (
                  <input
                    className="form-control input-sec"
                    type="text"
                    name="name"
                    onBlur={handleBlur}
                    placeholder="Your Name"
                  />
                )}
                <br />
                <input
                  className="form-control input-sec"
                  type="text"
                  name="email"
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  required
                />
                <br />
                <input
                  className="form-control input-sec"
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  placeholder=" Your Password"
                  required
                />

                <br />

                <input
                  className="submit-btn"
                  type="submit"
                  value={newUser ? "Sing up" : "Login"}
                />
                <br />
                <div className="check-box">
                  <p>Don't Have Account?</p>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      onChange={() => setNewUser(!newUser)}
                      name="newUser"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    ></input>
                    <label htmlFor="newUser">Create a new user</label>
                  </div>
                </div>
              </form>
              <p style={{ color: "red" }}>{user.error}</p>
              {user.success && (
                <p style={{ color: "green" }}>
                  {" "}
                  Account {newUser ? "created" : "logged in"} successfully{" "}
                </p>
              )}
            </div>
            <hr></hr>
            <div className="social-log">
              {user.isSignedIn ? (
                <button onClick={handleSignOut}> sign out</button>
              ) : (
                <button onClick={handleSign}>
                  {" "}
                  <span>
                    {" "}
                    <img alt="" src={GoogleLogo}></img>
                  </span>
                  google sign in
                </button>
              )}
              <br />
              <button onClick={handleFbSignIn}>
                {" "}
                <span>
                  {" "}
                  <img alt="" src={FacebookLogo}></img>
                </span>{" "}
                Sign in with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>

    </>
  );
}

export default Login;
