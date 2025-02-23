import { useNavigate } from "react-router-dom";

const About = ({ companyName }: { companyName: string }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-purple-900 text-yellow-400 min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-6">About Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to <span className="text-yellow-400 font-bold">{companyName}</span>, your ultimate destination for premium fragrances.  
          Our mission is to provide luxury, elegance, and sophistication in every bottle.  
          Each of our perfumes is crafted with high-quality ingredients to create unique and unforgettable scents.  
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
          <ul className="text-lg text-gray-300 mt-4 space-y-3">
            <li>✔️ Handcrafted, premium-quality perfumes</li>
            <li>✔️ Long-lasting and unique fragrances</li>
            <li>✔️ 100% authentic and ethically sourced ingredients</li>
            <li>✔️ Worldwide shipping with hassle-free returns</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white">Our Story</h2>
          <p className="text-lg text-gray-300 mt-4">
            Founded in 2023, {companyName} was born from a passion for exquisite scents.  
            We started as a small boutique and quickly grew into a trusted brand known for quality and elegance.  
            Our team is dedicated to crafting perfumes that leave a lasting impression.
          </p>
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
