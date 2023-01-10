import React from "react";
import Buscador from "../components/Buscador";
import CategorySlider from "../components/CategorySlider";
import Nav from "../components/Nav";
import View from "../components/View";

const Home = () => {
  return (
    <div className="max-w-7xl m-auto">
      <h1>hola mundo</h1>
      <Nav />
      <div className="px-8 py-2">
        <Buscador />
      </div>
      <CategorySlider />
      <View />
    </div>
  );
};

export default Home;
