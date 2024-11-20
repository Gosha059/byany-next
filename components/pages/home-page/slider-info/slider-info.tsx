"use client"

import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";


export default function SliderInfo () {
    const sliderInfoBD= [
        {
            title: "OUR VALUES",
            description: "Biayna treats its clients as partners. As such, we value integrity, professionality, and expertise in our relationships. Our structural designs are committed to high regard for construction costs, constructability, efficiency, and finest standard of quality. All our projects pass through a close scrutiny of construction professionals to provide the most efficient and cost-effective engineering solutions."
        },
        {
            title: "COMPANY PROFILE",
            description: "Biayna treats its clients as partners. As such, we value integrity, professionality, and expertise in our relationships. Our structural designs are committed to high regard for construction costs, constructability, efficiency, and finest standard of quality. All our projects pass through a close scrutiny of construction professionals to provide the most efficient and cost-effective engineering solutions."
        },
        {
            title: "CLIENT FEEDBACK",
            description: "Biayna treats its clients as partners. As such, we value integrity, professionality, and expertise in our relationships. Our structural designs are committed to high regard for construction costs, constructability, efficiency, and finest standard of quality. All our projects pass through a close scrutiny of construction professionals to provide the most efficient and cost-effective engineering solutions."
        }
    ]

    return (
        <>
             
                <Carousel>
                    {sliderInfoBD.map((item, index) => (
                    <Carousel.Item key={`slider-item-${index}`}>
                        <Container fluid>
                            <div className="text-center p-5">
                            <h1>{item.title}</h1>
                            <p className="mt-3">{item.description}</p>
                            </div>
                        </Container>
                    </Carousel.Item>
                    ))}
                </Carousel>
            
        </>
    )
}