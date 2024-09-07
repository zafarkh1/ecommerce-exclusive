import Showcase from "../components/Showcase";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Sale from "../components/Sale";
import Arrival from "../components/Arrival";
import Services from "../components/Services";

function Home(props) {
  return (
    <>
      <Showcase />
      <Categories />
      <Products />
      <Sale />
      <Arrival />
      <Services />
    </>
  );
}

export default Home;
