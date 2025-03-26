import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { collection, addDoc } from 'firebase/firestore';
import { useFeedback } from '../context/FeedbackContext';
import db from "../firebase";
import paws from "./photos/paws.jpg"
import { Link } from "react-router-dom";
import { MdInfoOutline } from "react-icons/md";


export default function Contact() {
  const [result, setResult] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedbackData, setFeedbackData] = useState({
    full_name: '',
    email: '',
    message: '',
    rating: 0,
  });

  const { updateFeedback } = useFeedback();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2b224ec4-521a-4626-a94b-7bfa416c168a");
    formData.append("rating", rating); // Capture rating in form

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Form Submitted Successfully" : data.message);
    event.target.reset();
    setRating(0);
  };

  const handleFeedback = async (e) => {
    e.preventDefault();

    if (!feedbackData.full_name || !feedbackData.email || !feedbackData.message || rating === 0) {
      alert("Please fill in all fields and provide a rating.");
      return;
    }

    try {
      await addDoc(collection(db, 'feedback'), {
        ...feedbackData,
        rating,
        timestamp: new Date(),
      });
      
      setFeedbackData({
        full_name: '',
        email: '',
        message: '',
        rating: 0,
      });
      setRating(0);
      
      updateFeedback();
      
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen  from-gray-50 to-gray-200 flex items-center justify-center px-6 py-14 bg-[url('/paws.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white p-10 rounded-lg shadow-md border border-gray-300"
        >
          <h2 className="text-4xl  font-[lato] font-bold text-gray-900 mb-4">
            Contact a Vet
          </h2>
          <p className="text-gray-600 font-[lato] text-lg mb-6">
            Get  24/7 veterinary advice. Your query will be answered via email.
          </p>

          <form onSubmit={onSubmit} className="space-y-5 font-[lato]">
          {[
  { label: "Full Name", required: true },
  { label: "Email", required: true },
  { label: "Phone", required: true },
  { label: "Facebook ID", required: false },
  { label: "Instagram ID", required: false },
  { label: "State", required: true },
  { label: "Country", required: true },
  { label: "Pet Name", required: false }
].map((field, index) => (
  <div key={index} className="mb-4">
    <label className="block text-gray-700 text-sm font-medium mb-2">
      {field.label} {field.required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      name={field.label.replace(" ", "_").toLowerCase()}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required={field.required}
    />
  </div>
))}
            
            
            <div>
              <label className="block text-lg   font-[lato] text-gray-800">Pet Category</label>
              <select
                name="Pet_category"
                required
                className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
              >
                {["Dog", "Cat", "Bird", "Reptile", "Fish", "Other"].map((pet) => (
                  <option key={pet} value={pet}>{pet}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg font-[lato] text-gray-800">Your Query</label>
              <textarea
                name="message"
                required
                placeholder="Describe your pet's issue..."
                className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label className="block text-lg   font-[lato] text-gray-800">How do you wish to be contacted?</label>
              <select
                name="How do you wish to be contacted"
                required 
                className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
              >
                {["-- Select an option--","Instagram", "Facebook",  "WhatsApp"].map((pet) => (
                  <option key={pet} value={pet}>{pet}</option>
                ))}
              </select>
            </div>
           


            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 text-white font-[lato] py-3 rounded-md text-xl font-semibold hover:bg-gray-800 transition-all"
            >
              Submit Query
            </motion.button>
            < motion.a
          href="/Bookconsultation"
          className="mt-8 w-full inline-block text-lg font-[lato] font-medium px-9 py-3 rounded-xl shadow-lg bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-xl text-center"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.9 }}
        >
          Book Consultation →
        </motion.a>
        <div className="flex items-center gap-2 p-3 bg-blue-100 text-blue-700 border-l-4 border-blue-500 rounded-lg shadow-md max-w-lg mx-auto">
      <MdInfoOutline className="text-xl" />
      <p className="text-sm md:text-base font-medium">
        <span className="font-semibold">NOTE:</span> Indian pet parents will be contacted via email or WhatsApp.
      </p>
    </div>
           
          </form>

          <span className="block text-center text-sm mt-4 font-[lato] text-gray-700">{result}</span>
        </motion.div>



        {/* Feedback Form with Star Rating */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white p-10 rounded-lg shadow-md border border-gray-300"
        >
          <h2 className="text-4xl font-[lato] font-bold text-gray-900 text-center mb-4">
            Feedback
          </h2>
          <p className="text-gray-700 font-[lato] text-lg text-center mb-6 leading-relaxed">
            We value your feedback! Help us improve by sharing your experience.
          </p>

          <form onSubmit={handleFeedback} className="space-y-6">
            <div>
              <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="full_name"
                value={feedbackData.full_name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={feedbackData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
                required
              />
            </div>

            <div className="flex flex-col font-[lato] items-center">
              <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
                Rate Our Service
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer text-3xl transition-all ${
                      (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-[lato] text-gray-900 font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={feedbackData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                rows="4"
                className="w-full px-4 py-3 border font-[lato] border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gray-900 font-[lato] text-white font-semibold py-3 rounded-md shadow-md hover:bg-gray-800 transition-all text-lg"
              >
                Submit Feedback
              </button>
            </div>
          </form>

          <span className="block text-center text-sm mt-4 font-[lato] text-gray-700">{result}</span>
        </motion.div>
      
      </div>
    </div>
  );
}
