import "./index.css"
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import {useEffect, useState} from "react";

function App() {
  const [showCanvas, setShowCanvas] =  useState(true); //defines if you want to showcanvas or not
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  return (
    <>
      <div className="w-full relative min-h-screen bg-black text-white font-[Helvetica_Now_Display]">
        {showCanvas && data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets}/>
        ))}
        <div className="w-full h-screen z-[1] text-white relative">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300">
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[10%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.5]">
                At thirtysixstudio, we build immersive digital experiences for brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
            </div>
          </div>
          <div className="overflow-x-hidden relative w-full"></div>
          <div className="w-full absolute bottom-0 left-0">
            <h1 className="text-[14rem] font-normal tracking-tight leading-none pl-5">Thirtysixstudios</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen relative text-white pt-10">
      {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets}/>
        ))}
        <h1 className="text-8xl tracking-tighter">About the brand</h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light"> we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.</p>
      </div>
    </>
  )
}

export default App