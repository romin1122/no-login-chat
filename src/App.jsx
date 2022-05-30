//PACKAGES 
import React, { useState } from 'react';
import { onSignIn } from './firebase';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import ButtonAppBar from "./components/AppBar";
import Seo from './components/seo.jsx';
import Home from "./pages/home";
import About from "./pages/about";
import Chatroom from "./pages/chatroom";
import CreateLink from './pages/create-link';
import Room from './pages/room';

//STYLES
import "./styles/styles.css";
import Homepage from './pages/homepage';


export default function App() {

  return (
    <BrowserRouter>
      
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          {/* <ButtonAppBar /> */}

          <Routes>
            <Route index element={<Homepage />}/>
            <Route path="chatroom" element={<Chatroom />} />
            <Route path="create-link" element={<CreateLink />} />
            <Route path="room/:roomId" element={<Room />} /> 
            <Route path="about" element={<About />} />
            <Route path="*" element={<Homepage />}/>
          </Routes>
          
        </div>
      </main>

    </BrowserRouter>
  );
}

