import React from 'react'
import { Container } from 'react-bootstrap';

const Brands = () => {


    const brands = [
        "Ramco",
        "Chettinad",
        "Asian Paints",
        "Nagarjuna",
        "Nippon",
        "Ambuja",
    ];

    return (
        <div className="bg-light py-5 overflow-hidden">
            <Container fluid>
                <h2 className="text-center fw-bold mb-5">Our Brands</h2>

                <div className="marquee">
                    <div className="marquee-track">
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="marquee-item bg-white shadow-sm rounded px-4 py-3 mx-3 d-flex align-items-center justify-content-center"
                            >
                                {brand}
                                {/* If using logo images instead of text:
            <img src={brand.logo} alt={brand.name} height="40" />
            */}
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </div>

    )
}

export default Brands
