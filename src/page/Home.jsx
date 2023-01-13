import React from "react";
import Buscador from "../components/Buscador";
//import CategorySlider from "../components/CategorySlider";
import View from "../components/View";
import { useStoreModal, useStoreSearchProduct } from "../zustand/store";
import SearchProducts from "./SearchProducts";
import ModalMessageBuy from '../components/ModalMessageBuy'

const Home = () => {
  const { keyword } = useStoreSearchProduct();
  const {isActiveModal}=useStoreModal()
  //console.log((keyword))
  return (
    <div className="max-w-7xl m-auto">
      <div className="px-8 py-2">
        <Buscador />
      </div>
      {/* <CategorySlider /> */}
      {keyword ? <SearchProducts /> : <View />}
      {isActiveModal && <ModalMessageBuy/>}
    </div>
  );
};

export default Home;
