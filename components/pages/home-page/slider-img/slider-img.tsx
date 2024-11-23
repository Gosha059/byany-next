'use client'

import Image from "next/image";
import styles  from "./slider-img.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";





export default function SliderImg() {
  const [position, setPosition] = useState<number>(0)
        const slides = [
          {
            image: "/slider/home-1-4kx700.jpg",
            title: "LA'S LEADING EARTHQUAKE ENGINEERING FIRM",
            description: "Описание первого слайда.",
            position: true,
          },
          {
            image: "/slider/home-2-4kx700.jpg",
            title: "slider-2",
            description: "Описание второго слайда.",
            position: false,
          },
        ];
        
        useEffect(() => {
          const interval = setInterval(() => {
            setPosition((prevSlide) => (prevSlide + 1) % slides.length);
          }, 5000); 
          return () => clearInterval(interval); 
        }, [slides.length]);

      return (
        <div className={` relative w-full  h-[700px] overflow-hidden block z-0`}>
           
          {slides.map((slide, index) => (
              <div key={index} className={` absolute  transition duraction-1000 ease-in-out 
              ${ index === position? "opacity-1 z-10" : "opacity-0 z-0"}`} 
              style={{ height: "100%", width: "100%" }}>
                
                <Image
                  src={`${slide.image}`}
                  alt={slide.title}
                  
                  className={`relative  w-full h-full object-cover `}
                  quality={100}
                  fill
                  sizes="100vw"
                  objectFit="cover"
                  priority
                >
                </Image>
                
                <div  className="relative container">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                    
                  </div>
              </div>
            ))}
     
        </div>
      );
 
}