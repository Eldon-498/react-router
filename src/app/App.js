import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        {/* Add Routes here! */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
