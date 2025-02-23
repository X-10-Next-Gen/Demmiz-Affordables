import { Product } from "../Type";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = ({ products, companyName }: { products: Product[]; companyName: string }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-purple-900 text-yellow-400 min-h-screen">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to {companyName}
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Luxury perfumes crafted for elegance & sophistication.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-6 px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Shop Now
          </button>
        </div>
        <div className=""></div>
      </section>

      {/* Featured Products */}
      <section className="p-10">
        <h3 className="text-3xl font-bold text-center text-yellow-400">Featured Perfumes</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-purple-800 p-6 rounded-lg text-center">
              <img src={product.img} alt={product.name} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold">{product.name}</h4>
              <p className="text-gray-300">${product.price}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-purple-900 rounded-lg hover:bg-yellow-500 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-purple-800 p-10 text-center">
        <h3 className="text-3xl font-bold text-yellow-400">About {companyName}</h3>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          {companyName} is a premium online perfume store dedicated to delivering high-quality fragrances 
          that define elegance and luxury. Explore our collection and find your perfect scent.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="mt-6 px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          Learn More
        </button>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold text-yellow-400">Contact {companyName}</h3>
        <p className="text-gray-300 mt-4">Have questions? Reach out to us on social media:</p>
        
        <div className="mt-4 flex justify-center space-x-4 text-xl">
          <a href="#" className="hover:text-white transition"><FaFacebook /></a>
          <a href="#" className="hover:text-white transition"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram /></a>
        </div>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
