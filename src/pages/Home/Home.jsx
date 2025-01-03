import React from "react";
import Hero from "../../sections/Hero/Hero";
import AccessPage from "../../sections/Acsess/Acsess";
import Workflow from "../../sections/Workflow/Workflow";
import Testimonial from "../../sections/Testimonial/Testimonial";
import Contact from "../../sections/Contact/Contact";
import SectorList from "../../sections/SectorList/SectorList";
import './styles/Home.module.scss'
const Home = () => {    
    return (
        <div>
            <Hero />
            <AccessPage />
            
            <SectorList />
            <Testimonial />
            <section style={{ display: "flex" , gap: "15px"}}>
                <Workflow />
                <Contact />
            </section>
        </div>
    );
}

export default Home;