import Header from "../../04-tut/src/Header.js";
import Nav from "../../04-tut/src/Nav.js";
import Footer from "../../04-tut/src/Footer.js";
import Home from "../../04-tut/src/Home.js";
import About from "../../04-tut/src/About.js";
import NewPost from "../../04-tut/src/NewPost.js";
import PostPage from "../../04-tut/src/PostPage.js";
import Missing from "../../04-tut/src/Missing.js";
import{Route,Routes} from 'react-router-dom';
//import { useState, useEffect } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
     <Header title="Reeact Js Blog"/>
      <Nav />
      <Routes>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/post">
        <NewPost/>
        </Route>
        <Route path="/post/:id">
        <PostPage/>
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Routes>
     <Footer />


      
        
    </div>
  );
}

export default App;
 