import React from "react";
import Header from "./components/Header";

import "./App.css"
import Paragrap from "./components/Paragrap";
import ImageSection from "./components/ImageSection";
import About from "./components/About";
import Testamonial from "./components/Testimonial";
import WorkSection from "./components/WorkSection";

import image from "./asset/data";

function App() {
  return (
    <div>
    <Header />
    {/* <h5>Hey My name is Rakibul Islam Mondal</h5> */}
    {/* <Paragrap /> */}
    <ImageSection />
    
    <div className="about-in">
    <About />
    <hr />
    {/* <Testamonial /> */}
    </div>
    <h1 className='head-text'>MY WORK</h1>
      <h5 className='par-text' style={{marginBottom:"50px"}}>Awsome Project</h5>
    <div className="xxx">
      
      {image.map(pic=> 
        {
          return <WorkSection link={pic.link} />
        }
      )}  
      
    </div>
    </div>
  );
}

export default App;
