import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import AddServices from "./Components/Admin/AddServices/AddServices";
import CheckOut from "./Components/User/CheckOut/CheckOut";
import ChackSidebar from "./Components/User/ChackSidebar/ChackSidebar";
import BookList from "./Components/User/BookList/BookList";
import ManageServices from "./Components/Admin/ManageServices/ManageServices";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Review from "./Components/Home/Review/Review";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./Components/Admin/OrderList/OrderList";
import ReviewHome from "./Components/Home/ReviewHome/ReviewHome";
import Contact from "./Components/Home/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import OurTeam from "./Components/Home/OurTeam/OurTeam";

export const UserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            {/* user  */}
            <Route path="/review">
              <Navbar />
              <ReviewHome></ReviewHome>
            </Route>

            <Route path="/blog">
              <Navbar />
              <h1>Blog section coming soon</h1>
            </Route>

            <Route path="/ourTeam">
              <Navbar />
              <OurTeam></OurTeam>
            </Route>

            <Route path="/contact">
              <Navbar />
              <Contact />
            </Route>

            <PrivateRoute path="/checkOut/:_id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/checkOut/booking"></PrivateRoute>

            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>

            <PrivateRoute path="/bookingList">
              <BookList></BookList>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            {/* user  */}

            {/* admin */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/dashbord/addServices">
              <AddServices></AddServices>
            </PrivateRoute>

            <PrivateRoute path="/dashbord/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            <PrivateRoute path="/dashbord/orderList">
              <OrderList></OrderList>
            </PrivateRoute>

            <PrivateRoute path="/dashbord/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            {/* admin */}

            <Route path="*">
              <h1>No Match </h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
