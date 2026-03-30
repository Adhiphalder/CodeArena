import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import CTA from "../components/CTA";

export default function Home() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/api/test") 
            .then(res => res.json())
            .then(data => setMsg(data.message))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Hero />

            <h2 style={{ textAlign: "center" }}>{msg}</h2>

            <Features />
            <Pricing />
            <Faq />
            <CTA />
        </>
    );
}