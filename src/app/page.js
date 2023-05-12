import Script from "next/script";
import Logo from "../../assets/logo.svg";
import CocktailList from "./components/CocktailList";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Script src="https://third-party-script.js"></Script>
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
