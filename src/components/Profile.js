import React from "react";
import { useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
  
  // use loggedIn to return a Redirect
  
  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={"/profile/edit"}>Edit</Link>
      {/* Render a route for EditProfileForm */}
    </main>
  )
}
