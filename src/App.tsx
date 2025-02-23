import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop"; // Assuming you have a Shop page
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css'; 


const App = () => {

  const companyName = "Demmiz-Affordables"; // 🔥 Define company name
  const products = [
    {
      img: "https://www.luxuryperfume.com/poison-by-christian-dior-566.html",
      name: "Christian Dior Poison",
      price: 89.99,
    },
    {
      img: "https://usa.tommy.com/en/men/shoes-accessories/fragrance/tommy-for-men-fragrance-3-4oz/0036302049.html",
      name: "Tommy Hilfiger for Men",
      price: 69.00,
    },
    {
      img: "https://www.fragrantica.com/news/Al-Haramain-Perfumes-Celebrates-50-Anniversary-Of-The-Brand-14344.html",
      name: "Al Haramain 50 Years Anniversary",
      price: 120.00,
    },
    {
      img: "https://www.dolce.pl/christian-dior/miss-dior-cherie-eau-de-parfum-2011/15081.php5",
      name: "Christian Dior Miss Dior Eau de Parfum",
      price: 105.00,
    },
    {
      img: "https://www.amazon.com/Tommy-Hilfiger-Toilette-Spray-Women/dp/B000C1ZEY4",
      name: "Tommy Hilfiger Tommy Girl Eau de Toilette",
      price: 45.00,
    },
    {
      img: "https://www.bodegaaurrera.com.mx/ip/perfumes-y-lociones/al-haramain-edp-spray-edicion-azul-amber-oud-6-7-oz-al-haramain-edp-spray-edicion-azul-6-7-oz/00629110681278",
      name: "Al Haramain Amber Oud Bleu Edition",
      price: 85.00,
    },
  ];
  
  return (
    <Router>
      <Header  companyName={companyName} />
      <Routes>
        <Route path="/" element={<Home products={products} companyName={companyName} />} />
        <Route path="/about" element={<About  companyName={companyName} />} />
        <Route path="/contact" element={<Contact  companyName={companyName} />} />
        <Route path="/shop" element={<Shop  />} />
      </Routes>
      <Footer   companyName={companyName}/>
    </Router>
  );
};

export default App;
