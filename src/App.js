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
  useSpotifyAuth();  // Using the custom hook

  return (
    <div className="App">
      <Header />
      <main className="py-3">
          <Home />
          <Episodes />
          <About />
          <Crew />
      </main>
      <Footer />
    </div>
  );
}

export default App;
