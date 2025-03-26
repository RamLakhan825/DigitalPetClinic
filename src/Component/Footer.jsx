

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "./photos/DigitalLogo.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-gray-100 to-blue-50 py-6 px-3 md:px-16 text-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo & About */}
          <motion.div className="text-center md:text-left" whileHover={{ scale: 1.02 }}>
            <motion.img
              src={logo}
              alt="Vetonline Logo"
              className="mx-auto md:mx-0 w-30 h-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <h2 className="text-3xl font-extrabold mt-3 font-[lato] text-gray-900">Digitalpetclinic.com</h2>
            <p className="text-gray-700 font-[lato] text-sm">A Virtual Veterinary Clinic </p>
            <p className="text-gray-700 font-[lato] mt-4 leading-relaxed">
              We help pet parents & their beloved companions—whether fur babies or exotic pets—enjoy a happy, healthy journey from infancy to their golden years.
            </p>

            {/* Social Icons with Hover Effects */}
            <div className="flex flex-col items-center md:items-start mt-6 space-y-3">
              <div className="flex justify-center md:justify-start space-x-3">
                {[
                  {
                    icon: <FaFacebookF />,
                    color: "hover:bg-blue-500",
                    link: "https://www.facebook.com/profile.php?id=61567724497242&mibextid=ZbWKwL"
                  },
                  {
                    icon: <FaInstagram />,
                    color: "hover:bg-pink-500",
                    link: "https://www.instagram.com/vet_wizard?igsh=ZnJuYXF6cTJtNnF4"
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-100 p-3 rounded-full shadow-lg text-gray-900 transition ${item.color}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div className="text-center md:text-left" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl text-gray-900 font-[lato] font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-800 font-[lato]">
              {[
                "First aid and emergency advice",
                "Infectious disease management",
                "Parasite control",
                "Nutrition and diet guidance",
                "Enclosure and husbandry setup",
                "Breeding and neonatal care",
                "Second Opinions – Expert reviews",

              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5, color: "#333" }} transition={{ duration: 0.3 }}>
                  {service}
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center space-x-6 mt-4">
                    <a
                      href="/Terms"
                      className="text-gray-600 font-[lato] text-lg hover:underline"
                    >
                      Terms & Conditions
                    </a>
                    <a
                      href="/Privacy"
                      className="text-gray-600 font-[lato] text-lg hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="text-center  font-[lato] md:text-left" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-[lato] text-gray-900 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 font-[lato] text-gray-800">
              <motion.li whileHover={{ x: 5, color: "#333" }}>
                <a href="mailto:vetonlineconsults@gmail.com" className="hover:text-gray-900 font-[lato] transition">
                  Digitalpetclinic@gmail.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#333" }}>
                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-semibold">Dr. Vivek</span>
                    <a href="tel:+919424094362" className="text-gray-700 font-[lato] hover:text-gray-900 transition duration-300">
                      +91 94240 94362
                    </a>
                    {/* Instagram Link */}
                    <a
                      href="https://www.instagram.com/vet_wizard?igsh=ZnJuYXF6cTJtNnF4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 font-[lato] hover:text-gray-900 transition duration-300 mt-2"
                    >
                      <FaInstagram className="text-xl mr-2 text-pink-500 hover:text-pink-600 font-[lato] transition-all duration-300" />
                      Follow on Instagram
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-[lato] font-semibold">Dr. Vishal</span>
                    <a href="tel:+918200600163" className="text-gray-700 font-[lato] hover:text-gray-900 transition duration-300">
                      +91 82006 00163
                    </a>
                    <a
                      href="https://www.instagram.com/dr_vishal_patel_21?igsh=bjNzbjNtNm9sNmky"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 font-[lato] hover:text-gray-900 transition duration-300 mt-2"
                    >
                      <FaInstagram className="text-xl mr-2 text-pink-500 font-[lato] hover:text-pink-600 transition-all duration-300" />
                      Follow on Instagram
                    </a>
                  </div>
                  
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center text-gray-600 text-sm mt-10 font-[lato] border-t border-gray-300 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          © {new Date().getFullYear()}   Digitalpetclinic.com - All Rights Reserved
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;