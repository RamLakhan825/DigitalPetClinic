import React, { useState } from "react";
import PayPalButton from "./PayPal.jsx"; // Import PayPal button

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const [showPayPal, setShowPayPal] = useState(false);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
  const priceInINR = 25.75; // Set amount in INR

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayPal(true);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful:", details);
    setAppointmentConfirmed(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book an Appointment
        </h2>

        {appointmentConfirmed ? (
          <p className="text-green-600 text-center text-xl">✅ Appointment Confirmed!</p>
        ) : !showPayPal ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" className="w-full p-2 border rounded" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full p-2 border rounded" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Facebook ID" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Instagram ID" className="w-full p-2 border rounded" />
            <input type="text" placeholder="State *" required className="w-full p-2 border rounded" />
            <input type="text" placeholder="Country *" required className="w-full p-2 border rounded" />
            <input type="text" placeholder="Pet Name" className="w-full p-2 border rounded" />

            <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg w-full">
              Submit & Pay with PayPal
            </button>
          </form>
        ) : (
          <PayPalButton amount={priceInINR} onSuccess={handlePaymentSuccess} />
        )}
      </div>
    </div>
  );
};

export default BookConsultation;
