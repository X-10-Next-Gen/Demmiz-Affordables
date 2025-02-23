import { useState } from "react";
import { FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";

const Contact = ({ companyName }: { companyName: string }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  return (
    <div className="bg-purple-900 text-yellow-400 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      
      {/* Contact Information Section */}
      <div className="max-w-3xl w-full bg-purple-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300">
          Have any questions? We’d love to hear from you!  
          Contact <span className="text-yellow-400 font-semibold">{companyName}</span>, and our support team will assist you.
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-lg">📍 <span className="text-yellow-400">Location:</span> 123 Fragrance Lane, Scent City, SC 45678</p>
          <p className="text-lg">
            📧 <span className="text-yellow-400">Email:</span>  
            <a href={`mailto:support@${companyName.toLowerCase().replace(/\s+/g, '')}.com`} className="text-yellow-400 hover:underline">
              support@{companyName.toLowerCase().replace(/\s+/g, '')}.com
            </a>
          </p>
          <p className="text-lg">
            📞 <span className="text-yellow-400">Phone:</span>  
            <a href="tel:+12345678900" className="text-yellow-400 hover:underline">
              +1 (234) 567-8900
            </a>
          </p>
          <p className="text-lg">🕒 <span className="text-yellow-400">Business Hours:</span> Mon - Fri, 9 AM - 6 PM</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-lg w-full bg-purple-800 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Input */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-white text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-yellow-400 text-purple-900 py-3 rounded-md font-semibold hover:bg-yellow-500 transition shadow-md">
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {success && <p className="text-green-400 text-sm mt-4 text-center bg-green-900 p-2 rounded-md shadow-md">{success}</p>}
      </div>

      {/* Social Media Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-white">Connect with Us</h3>
        <p className="text-gray-300">Follow {companyName} for updates, exclusive offers, and fragrance tips.</p>

        <div className="mt-6 flex justify-center space-x-6 text-3xl">
          <a href="#" className="text-yellow-400 hover:text-white transition transform hover:scale-110">
            <FaGlobe /> <span className="text-lg">Website</span>
          </a>
          <a href="#" className="text-yellow-400 hover:text-white transition transform hover:scale-110">
            <FaFacebook /> <span className="text-lg">Facebook</span>
          </a>
          <a href="#" className="text-yellow-400 hover:text-white transition transform hover:scale-110">
            <FaInstagram /> <span className="text-lg">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
