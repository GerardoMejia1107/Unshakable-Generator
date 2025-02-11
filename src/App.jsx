import "./styles/App.css";
import Heading from "./components/Heading/Heading";
import Hero from "./components/Hero/Hero";
import Generator from "./components/Generator/Generator";
import FeatureList from "./components/FeaturesList/FeaturesList";

import { featuresData } from "./constants/featuresData.js";

function App() {
    return (
        <>
            <Heading />
            <Hero />
            <Generator />

            <section id="features-section">
                <h2>Why you should choose us?</h2>
                <FeatureList featuresData={featuresData} />
            </section>
        </>
    );
}

export default App;
