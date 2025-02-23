import { Product } from "../Type"; // Define a Product type in `types.ts`

const perfumeOils: Product[] = [
  { img: "https://via.placeholder.com/150", name: "Arabian Musk", price: 29.99 },
  { img: "https://via.placeholder.com/150", name: "Oud Royale", price: 59.99 },
];

const PerfumeOils = () => {
  return (
    <div className="min-h-screen bg-purple-900 text-yellow-400 p-10">
      <h2 className="text-3xl font-bold text-center">Perfume Oils</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {perfumeOils.map((product, index) => (
          <div key={index} className="bg-purple-800 p-6 rounded-lg text-center">
            <img src={product.img} alt={product.name} className="mx-auto mb-4 w-full h-auto rounded-md" />
            <h4 className="text-xl font-semibold">{product.name}</h4>
            <p className="text-gray-300">${product.price.toFixed(2)}</p>
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-purple-900 rounded-lg hover:bg-yellow-500 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeOils;
