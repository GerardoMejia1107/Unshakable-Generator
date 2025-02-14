import "./styles/App.css";
import Heading from "./components/Heading/Heading";
import Hero from "./components/Hero/Hero";
import Generator from "./components/Generator/Generator";
import FeatureList from "./components/FeaturesList/FeaturesList";

import { featuresData } from "./constants/featuresData.js";
import useFetch from "./hooks/useFetch.jsx";
import { useEffect, useState, useMemo } from "react";
import Carousel from "./components/Carousel/Carousel.jsx";
import DynamicHeading from "./components/DynamicHeading/DynamicHeading.jsx";
import FAQsList from "./components/FAQsList/FAQsList.jsx";

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
                <DynamicHeading headingType={"h2"}>
                    Why Choose us?
                </DynamicHeading>
                <FeatureList featuresData={featuresData} />
            </section>

            <section id="testimonial__carousel__section">
                <DynamicHeading headingType={"h2"}>
                    Customer Experiences
                </DynamicHeading>
                <Carousel usersData={users} />
            </section>

            <section id="faqs__section">
                <DynamicHeading headingType={"h2"}>
                    Password generator FAQs
                </DynamicHeading>
                <FAQsList />
            </section>
        </>
    );
}

export default App;
