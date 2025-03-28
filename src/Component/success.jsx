import React from "react";
import { Link } from "react-router-dom";
import dog from "./photos/dog45.jpg";
import { motion } from "framer-motion";

const Confirmation = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5] px-6">
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-4xl w-full">
                {/* Text Section */}
                <div className="bg-blue-100 rounded-lg p-6 md:p-10 w-full md:w-2/3 space-y-4">
                    <span className="text-blue-700 font-semibold text-lg tracking-wide">
                    Digital Pet Clinic
                    </span>
                    <h2 className="text-4xl font-extrabold text-blue-700">
                        Thank you for trusting us!
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Your payment has been successfully received. Our team will contact you soon to confirm your appointment time and provide any additional information you may need.
                        <br /><br />
                        We look forward to helping you and your pet!
                    </p>

                    <a
                        href="/"
                        className="inline-block bg-blue-600 text-white px-6 py-2 font-[Lato] font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300 mr-4"
                    >
                        Go to Home
                    </a>
                    <a
                        href="/Bookconsultation"
                        className="inline-block bg-blue-600 text-white px-6 py-2 font-[Lato] font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Book Another Consultation
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
                    <img
                        src={dog}
                        alt="Happy Dog"
                        className="w-64 h-64 object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Confirmation;