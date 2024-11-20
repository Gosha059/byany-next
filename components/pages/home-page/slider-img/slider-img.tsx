'use client'

import styles  from "./slider-img.module.css";
import Link from "next/link";
import { useState } from "react";





export default function SliderImg() {
        const slides = [
          {
            image: "slider/home-1-4kx700.jpg",
            title: "LA'S LEADING EARTHQUAKE ENGINEERING FIRM",
            description: "Описание первого слайда.",
          },
          {
            image: "slider/home-2-4kx700.jpg",
            title: "Второй слайд",
            description: "Описание второго слайда.",
          },
        ];
      return (
        <div className={`${styles.showcase}`}>
           <div>
      {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="carousel-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "700px", // Задайте высоту слайдера
              }}
            >
              <div className="carousel-caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      );
 
}