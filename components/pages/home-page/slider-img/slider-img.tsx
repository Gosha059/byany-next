'use client'

import styles  from "./slider-img.module.css";
import Link from "next/link";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";




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
           <Carousel>
      {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "700px", // Задайте высоту слайдера
              }}
            >
              <Container fluid className="carousel-caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
        </div>
      );
 
}