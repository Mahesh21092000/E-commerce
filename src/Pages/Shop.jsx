import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newst from "../Components/Newst/Newst";


function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <NewCollections/>
      <Newst/>
      
    </div>
  );
}

export default Shop;
