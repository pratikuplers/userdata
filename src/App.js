import React from "react";
import Home from "./components/home";
import Userlist from "./components/userlist";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import User from "./components/user";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="userlist" element={ <Userlist/> } />
        <Route path="user/:id" element={<User />} />
      </Routes>
      <Footer/>
    </>
   
  );
}

export default App;
