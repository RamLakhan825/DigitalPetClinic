


// import { motion } from "framer-motion";
// import ba13 from "./photos/b14.jpg"
// import ba15 from "./photos/b16.jpg"
// import ba17 from "./photos/b18.jpg"
// import ba20 from "./photos/b20.jpg"
// import ba21 from "./photos/b21.jpg"
// import ba23 from "./photos/b24.jpg"
// import ba24 from "./photos/b23.jpg"
// import ba25 from "./photos/b25.jpg"
// import ba26 from "./photos/b26.jpg"
// import Exotic from "./photos/Exotic.png"
// import bvideo from "./photos/bvideo.mp4"



// const images = [
//   <video 
//   src={bvideo} 
//   alt="In Cognita" 
//   className="w-full max-w-3xl rounded-lg shadow-lg" 
//   controls 
//   autoPlay 
//   loop 
//   muted
// />,
//   { src: Exotic, alt: "In Cognita" },
//   { src: ba13, alt: "In Cognita" },

//   { src: ba15, alt: "Spellverse" },

//   { src: ba17, alt: "In Cognita" },

//   { src: ba20, alt: "In Cognita" },
//   { src: ba21, alt: "In Cognita" },
//   { src: ba23, alt: "Fourth Image" },
//   { src: ba24, alt: "Spellverse" },
//   { src: ba25, alt: "In Cognita" },
//   { src: ba26, alt: "In Cognita" },





  
// ];

// export default function ImageCarousel() {
//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-[lato] font-bold text-center mb-6">
//         Some Success Stories!
//       </h2>
//       <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className="relative min-w-[300px] md:min-w-[400px] rounded-2xl overflow-hidden shadow-md transition-all duration-500 snap-center"
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.4 }}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import ba13 from "./photos/b14.jpg";
import ba15 from "./photos/b16.jpg";
import ba17 from "./photos/b18.jpg";
import ba20 from "./photos/b20.jpg";
import ba21 from "./photos/b21.jpg";
import ba23 from "./photos/b24.jpg";
import ba24 from "./photos/b23.jpg";
import ba25 from "./photos/b25.jpg";
import ba26 from "./photos/b26.jpg";
import Exotic from "./photos/Exotic.png";

import bvideo from "./photos/b2video.mp4";

const images = [
  { type: "video", src: bvideo, alt: "In Cognita" }, // Define type for the video
  { type: "image", src: Exotic, alt: "In Cognita" },
  { type: "image", src: ba13, alt: "In Cognita" },
  { type: "image", src: ba15, alt: "Spellverse" },
  { type: "image", src: ba17, alt: "In Cognita" },
  { type: "image", src: ba20, alt: "In Cognita" },
  { type: "image", src: ba21, alt: "In Cognita" },
  { type: "image", src: ba23, alt: "Fourth Image" },
  { type: "image", src: ba24, alt: "Spellverse" },
  { type: "image", src: ba25, alt: "In Cognita" },
  { type: "image", src: ba26, alt: "In Cognita" },
];

export default function ImageCarousel() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-[lato] font-bold text-center mb-6">
        Some Success Stories!
      </h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="relative min-w-[300px] md:min-w-[400px] rounded-2xl overflow-hidden shadow-md transition-all duration-500 snap-center"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-full object-cover rounded-2xl"
                controls
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}