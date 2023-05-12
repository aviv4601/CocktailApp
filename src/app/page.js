import Logo from "../../assets/logo.svg";
import CocktailList from "./components/CocktailList";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <div className="mt-[-70px]">
        <img src={Logo.src}></img>
      </div>
      <div>
        <CocktailList></CocktailList>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
