import React, { useState } from "react";
import axios from "axios";
import image from "../../assets/SHELEADS.png";
import { useNavigate } from "react-router-dom";

function Home() {
    const [formData, setFormData] = useState({ name: "", age: "" });
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users", formData);
            alert(response.data.message);
            navigate("/features"); // Redirect after successful submission
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        }
    };

    return (
        <div className="h-[550px] w-[1000px] rounded-4xl flex items-center justify-between p-10 text-white 
                        bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
            {/* Left Side: Logo */}
            <div className="w-1/2 flex justify-center">
                <img src={image} className="h-[200px]" alt="She Leads Logo" />
            </div>

            {/* Right Side: Form */}
            <form onSubmit={handleSubmit} className="p-6 rounded-lg w-[45%] flex flex-col gap-5">
                {/* Name Field */}
                <div className="flex flex-col">
                    <label className="text-white font-semibold mb-1 text-left">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-[#5A5A5A] rounded-md px-4 py-3 
                                   bg-transparent text-white 
                                   placeholder-gray-300 focus:outline-none 
                                   focus:ring-2 focus:ring-[#5A5A5A] w-full"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Age Field */}
                <div className="flex flex-col">
                    <label className="text-white font-semibold mb-1 text-left">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="border border-[#5A5A5A] rounded-md px-4 py-3 
                                   bg-transparent text-white 
                                   placeholder-gray-300 focus:outline-none 
                                   focus:ring-2 focus:ring-[#5A5A5A] w-full"
                        placeholder="Enter your age"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-gray-300 text-black px-6 py-3 rounded-md 
                               hover:bg-[#4A4A4A] transition-all duration-200 
                               text-lg font-medium w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Home;
