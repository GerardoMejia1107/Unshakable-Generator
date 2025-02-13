import "./styles/App.css";
import Heading from "./components/Heading/Heading";
import Hero from "./components/Hero/Hero";
import Generator from "./components/Generator/Generator";
import FeatureList from "./components/FeaturesList/FeaturesList";

import { featuresData } from "./constants/featuresData.js";
import useFetch from "./hooks/useFetch.jsx";
import { useEffect, useState, useMemo } from "react";
import Carousel from "./components/Carousel/Carousel.jsx";

function App() {
    const url = useMemo(() => "https://randomuser.me/api/?results=5", []);
    const { data, loading, error } = useFetch(url);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (data) {
            setUsers(data.results); // Update state when data is fetched
        }
    }, [data]);

    return (
        <>
            <Heading />
            <Hero />
            <Generator />

            <section id="features-section">
                <h2>Why Choose Us?</h2>
                <FeatureList featuresData={featuresData} />
            </section>

            <section id="testimonial__carousel__section">
                <h2>Customer Experiences</h2>
                <Carousel usersData={users} />
            </section>
        </>
    );
}

export default App;
