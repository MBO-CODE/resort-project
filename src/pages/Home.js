import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home() {
  return (
    // daca nu putem bracheturile <> si </> o sa avem o eroare cand o sa folosim services pentru ca o sa citim un JSON. PRactic bracheturile ne ajuta sa nu apara warnings
    <>
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          Our rooms
        </Link>
      </Banner>
    </Hero>
    <Services />
    </>
  );
}
