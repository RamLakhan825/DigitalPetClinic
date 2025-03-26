import { useState } from 'react';
import gc from "./photos/GC.avif"
import Skin from "./photos/Skin .avif"
import digestive from "./photos/DI.avif"
import paws from "./photos/paws.avif"
import dental from "./photos/dental.avif"
import Ears from "./photos/ear.avif"
import eyes from "./photos/eyes.avif"
import vishal from "./photos/vishal1.jpeg"
import vivek from "./photos/vivek2.jpeg"
import Contact from "./Contact";
import reptile from "./photos/turtle.jpg"
import mammals from "./photos/rabbit.jpg"
import aqua from "./photos/fish1.jpg"
import dog from "./photos/dog.jpg"
import tiny from "./photos/tiny.jpg"
import bird from "./photos/bird1.jpg"
import Testimonial from "./testimonial"
import Landingpage from "./Landingpage"
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import reproduction from "./photos/reproduction.avif"
import nutrition from "./photos/nutrition.avif"
import { motion } from 'framer-motion';
import  Before from "./Before"
const services = [
  { img: gc, label: "General Checkup" },
  { img: Skin, label: "Skin Issues" }, // Fixed filename
  { img: digestive, label: "Digestive Issues" },
  { img: paws, label: "Paws & Limbs" },
  { img: dental, label: "Dental Issues" },
  { img: Ears, label: "Ears Issues" },
  { img: eyes, label: "Eyes Issues" },
  { img: reproduction, label: "Reproduction" },
  { img: nutrition, label: "Nutrition" }
];
import React from "react";
const packages = [
  {
    title: "Companion Animal",
    nights: "Trusted Guide for Dogs & Cats",
    description:
      "From routine checkups to chronic disease management, get expert guidance for dogs and cats, covering nutrition, behavior, parasite control, pup and senior pet wellness, and much more!",
    image: dog, // Store the image path here
  },
  {
    title: "Reptile & Amphibian Arena",
    nights: "Tailored Advice  for Cold-Blooded Companions",
    description:
      "From snakes and lizards to turtles, frogs, and salamanders, proper care is essential for the health of your cold-blooded companions.Get specialized support for enclosure setup, temperature and humidity regulation, metabolic disorders, RIs, and more. Whether you’re a pet owner or wildlife rescuer, reliable veterinary advice is just a call away.",
    image: reptile, // Replace with actual image path
  },
  {
    title: "Avian Haven",
    nights: "Expert Care for Feathered Friends",
    description:
      "Get consultations for feather plucking, respiratory issues, dietary imbalances, enclosure optimization, behavioral concerns, and breeding guidance for all birds big and small. Ensure your bird thrives with expert health and wellness advice.",
    image: bird, // Replace with actual image path
  },
  {
    title: "Small Mammal Domain",
    nights: "Specialized Care for Rabbits, Rodents & Exotic Mammals",
    description:
      "Expert consultations for rabbits, guinea pigs, hamsters, rats, mice, ferrets, sugar gliders, marmosets, pocket monkeys, and other small mammals. We offer guidance on dental care, nutrition, housing, behavioral concerns, disease prevention, and enrichment.",
    image: mammals, // Replace with actual image path
  },
  {
    title: "Aquatic Care",
    nights: "Expert Guidance for Freshwater & Marine Fish",
    description:
      "Keeping fish healthy goes beyond feeding! We assist with water quality management, disease identification (Ich, fin rot, dropsy, etc.), proper tank cycling, nutrition planning, and stress reduction strategies for both freshwater and saltwater species, including betta fish, goldfish, cichlids, koi, and exotic marine species.",
    image: aqua, // Replace with actual image path
  },
  {
    title: "Tiny Titans",
    nights: "Specialized Care for Invertebrates",
    description:
      "From tarantulas and scorpions to hermit crabs, snails, isopods, and mantises, we help ensure proper enclosure conditions, molting success, nutritional support, and species-specific care for your exotic invertebrates.",
    image: tiny, // Replace with actual image path
  },


];
function App() {
  return (
    <div>

      <Landingpage></Landingpage>

      {/* 2nd section */}
      <div className="bg-blue-100 text-black font-[lato] py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-black border-l-4 border-green-400 pl-3 mb-4">
            Welcome to Digitalpetclinic.com : A Virtual Veterinary Clinic
          </h3>
          <h1 className="text-4xl md:text-5xl font-[lato] leading-tight">
            Online Veterinary Consultation: Get the best veterinary advice anytime, anywhere
          </h1>
          <p className="mt-6 text-black text-lg  font-[lato] leading-relaxed">
            At Digitalpetclinic.com, we're dedicated to providing top-notch veterinary care for all species,
            from companion animals to exotic pets. Our team of licensed veterinarians and
            specialists have extensive experience in caring for a wide range of animals from fur to
            feathers to fins and scales we’ve got everyone covered.          </p>
          <p className="mt-4 text-black  font-[lato] text-lg leading-relaxed">
            If you're looking for expert veterinary care for your animals, look no further .          </p>
          <div className="mt-8 bg-white/10 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-[lato] leading-relaxed">
              Our team of skilled veterinarians is glad to help you with all your pet’s medical needs. All health records and
              digital prescriptions are easily accessible. So, get the right guidance for your lovely companions from the
              comfort of your own home.
            </p>
            <p className="mt-4 text-xl font-extrabold text-center uppercase text-[#ff0000]">
              ⭐ <span className="text-3xl md:text-4xl font-black">1500+</span> HAPPY & SATISFIED PET PARENTS! ⭐
            </p>

          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold  font-[lato] text-gray-800">{pkg.title}</h2>
                <p className="text-gray-500 font-[lato] font-medium mt-2">{pkg.nights}</p>
                <p className="text-gray-600 font-[lato] mt-4">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* 4th section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold font-[lato] text-gray-900 mb-10"
        >
          Access Our Expert Vets from Anywhere
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-[lato] max-w-6xl mx-auto">
          {[
            {
              img: vivek,
              name: "Dr. Vivek K Maurya",
              specialty: "MVSc (Veterinary Medicine) | 3+ Years",
              qualification: " Companion animal, Avian and Exotic Animal veterinarian ",
              instagram: "https://www.instagram.com/vet_wizard?igsh=ZnJuYXF6cTJtNnF4",
              facebook: "https://www.facebook.com/profile.php?id=61567724497242&mibextid=ZbWKwL",
            },
            {
              img: vishal,  // Directly specify the path here
              name: "Dr. Vishal Patel",
              specialty: " Senior Veterinarian,MVSc (Veterinary Clinical Medicine, Ethics & Jurisprudence) | 7+ Years",
              qualification: "Avian & Exotic Animal Medicine, Rehabilitation Medicine, Kitchen Medicine & Diet Management. ",
              instagram: "https://www.instagram.com/dr_vishal_patel_21?igsh=bjNzbjNtNm9sNmky",
              facebook: "https://www.facebook.com/profile.php?id=61567724497242&mibextid=ZbWKwL",
            },
          ].map((vet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeOut' }}
              className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-blue-400"
              style={{ backdropFilter: "blur(10px)" }} // Glassmorphism effect
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full flex items-center justify-center overflow-hidden shadow-md border-4 border-white"
              >
                <img src={vet.img} alt={vet.name} className="w-full h-full object-cover" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 text-xl font-semibold text-gray-800"
              >
                {vet.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-blue-600 font-medium mt-1"
              >
                {vet.specialty}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-500 text-sm"
              >
                {vet.qualification}
              </motion.p>
              <div className="flex space-x-4 mt-3">
                <motion.a
                  href={vet.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <FaInstagram className="text-lg" />
                </motion.a>
                <motion.a
                  href={vet.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <FaFacebookF className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* contact page */}
      <Contact />
      <Before></Before>

      {/* feedback form */}
      <Testimonial />



      <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
      {/* WhatsApp Button with Wavy Motion */}
      <motion.a
        href="https://wa.me/9424094362"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        animate={{ x: [0, 10, 0, -10, 0], y: [0, -5, 0, 5, 0] }} // Creates a wavy movement
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </motion.a>

      {/* Facebook Button with Wavy Motion */}
      <motion.a
        href="https://www.facebook.com/profile.php?id=61574019002847"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        animate={{ x: [0, -10, 0, 10, 0], y: [0, 5, 0, -5, 0] }} // Opposite wavy movement
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          className="w-12 h-12"
        />
      </motion.a>
    </div>

      
  


      
    </div>
  );
}
export default App;


