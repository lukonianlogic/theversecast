import React from "react";
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Sections/Home/Home';
import Episodes from "./Sections/Episodes/Episodes";
import About from "./Sections/About/About";
import Crew from "./Sections/Crew/Crew";
import useSpotifyAuth from './Services/SpotifyAuth';

function App() {
  useSpotifyAuth();  

  return (
    <div className="App">
      <Header />
      <main className="py-3">
          <div id='home'><Home /></div>
          <div id="episodes"> <Episodes /></div>
          <div id="about"><About /></div>
          <div id="crew"><Crew /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
