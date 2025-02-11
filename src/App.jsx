import "./styles/App.css";
import Heading from "./components/Heading/Heading";
import Hero from "./components/Hero/Hero";
import Generator from "./components/Generator/Generator";
import FeatureList from "./components/FeaturesList/FeaturesList";

import { featuresData } from "./constants/featuresData.js";
import useFetch from "./hooks/useFetch.jsx";

function App() {
    const { data, loading, error } = useFetch(
        "https://randomuser.me/api/?results=1"
    );

    function handleGenerateUser() {}

    handleGenerateUser();

    return (
        <>
            <Heading />
            <Hero />
            <Generator />

            <section id="features-section">
                <h2>Why you should choose us?</h2>
                <FeatureList featuresData={featuresData} />
            </section>

            <section id="testimonial__carousel__section">

            </section>
        </>
    );
}

export default App;
