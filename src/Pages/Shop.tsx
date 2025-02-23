import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-900 text-white">
      <h1 className="text-4xl text-center font-bold mb-8">Choose Your Perfume Type</h1>
      
      <div className="flex space-x-6">
        <button
          className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          onClick={() => navigate("/shop/perfume-oils")}
        >
          Perfume Oils
        </button>

        <button
          className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          onClick={() => navigate("/shop/sprays")}
        >
          Sprays
        </button>
      </div>
    </div>
  );
};

export default Shop;
