import { useState } from "react";
import {
  MdPhoneAndroid,
  MdComputer,
  MdWatch,
  MdHeadphones,
  MdCameraAlt,
} from "react-icons/md";
import { TbClearAll } from "react-icons/tb";

import Showcase from "../components/Showcase";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Sale from "../components/Sale";
import Arrival from "../components/Arrival";
import Services from "../components/Services";

function Home(props) {
  const [activeTab, setActiveTab] = useState("Phones");

  const items = [
    { title: "All", icon: <TbClearAll /> },
    { title: "Phones", icon: <MdPhoneAndroid /> },
    { title: "Computers", icon: <MdComputer /> },
    { title: "Watches", icon: <MdWatch /> },
    { title: "Camera", icon: <MdCameraAlt /> },
    { title: "HeadPhones", icon: <MdHeadphones /> },
  ];

  return (
    <>
      <Showcase />
      <Categories active={activeTab} setActive={setActiveTab} data={items} />
      <Products />
      <Sale />
      <Arrival />
      <Services />
    </>
  );
}

export default Home;
