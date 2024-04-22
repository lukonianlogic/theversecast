import React from "react";
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Sections/Home/Home';
import Episodes from "./Sections/Episodes/Episodes";
import About from "./Sections/About/About";
import Crew from "./Sections/Crew/Crew";
// import useSpotifyAuth from './Services/SpotifyAuth';

function App() {
  // useSpotifyAuth();  

  return (
    <div className="App">
      <Header />
      <main className="" id="homePage">
          <div className="home" id='home'><Home /></div>
          <div className="episodes" id="episodes"> <Episodes /></div>
          <div className="about" id="about"><About /></div>
          <div className="crew" id="crew"><Crew /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
