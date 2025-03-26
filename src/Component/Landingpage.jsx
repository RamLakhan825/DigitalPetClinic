
import vet1 from "./photos/display.jpg";
import { motion } from "framer-motion";

const Landingpage = () => {
  return (
    <section className="relative w-full h-screen  font-[lato] flex items-center justify-center px-6 md:px-16 font-lato overflow-hidden">
      {/* Background Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${vet1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* Dark Overlay (No Blur) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center md:text-left md:items-start max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        >
          Expert Veterinary Care for All –  From Fur to Feathers to Fins & Scales!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-200 drop-shadow-lg leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
        >
          A virtual vet clinic where you connect with experts for companion animals, birds, reptiles, fish & exotics—anytime, anywhere!
        </motion.p>

        {/* Button */}
        <a
  href="/Contact"
  className="mt-8 inline-block text-lg font-medium px-8 py-4 rounded-lg shadow-lg bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-xl active:scale-95"
>
  Consult Now →
</a>
      </motion.div>
    </section>
  );
};

export default Landingpage;