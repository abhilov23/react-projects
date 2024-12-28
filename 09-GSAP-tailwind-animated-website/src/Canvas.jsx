import { useEffect, useRef, useState } from "react"
import canvasImages from "./canvasimage";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap"; 


function Canvas({details}) {
  const {startIndex, numImages, duration, size, top, left, zIndex} = details;

    const [index, setIndex] = useState({value: startIndex});
    const canvasRef = useRef(null);
    
    useGSAP(()=>{ //useGSAP allows context safety
      gsap.to(index, {
        value: startIndex + numImages - 1,
        duration: duration,
        repeat: -1,
        ease: "linear",
        onUpdate:()=>{
           setIndex({ value: Math.round(index.value)}); //for taking math values
        },
      })
    })

    useEffect (()=>{ //picking up the images using useEffect()
      const scale = window.devicePixelRatio;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d")
      const img = new Image();
      img.src = canvasImages[index.value]; //picking up the image from the image url array
      img.onload = () =>{
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
    }, [index]);

  return (
    <canvas data-scroll data-scroll-speed={Math.random().toFixed(2)}  ref={canvasRef} className="absolute" style={{ width: `${size}px`, height: `${size}px`, top: `${top}%`, left:`${left}%`, zIndex:`${zIndex}`}} id="canvas">
    </canvas>
  )
}

export default Canvas