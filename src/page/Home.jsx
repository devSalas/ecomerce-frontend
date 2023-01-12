import React from "react";
import Buscador from "../components/Buscador";
//import CategorySlider from "../components/CategorySlider";
import View from "../components/View";
import { useStoreSearchProduct } from "../zustand/store";
import SearchProducts from "./SearchProducts";

const Home = () => {
  const { keyword } = useStoreSearchProduct();
  //console.log((keyword))
  return (
    <div className="max-w-7xl m-auto">
      <div className="px-8 py-2">
        <Buscador />
      </div>
      {/* <CategorySlider /> */}
      {keyword ? <SearchProducts /> : <View />}
    </div>
  );
};

export default Home;
