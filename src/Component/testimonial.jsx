// import { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { collection, query, orderBy, getDocs } from 'firebase/firestore';
// import { useFeedback } from '../context/FeedbackContext';
// import db from "../firebase";

// export default function Testimonials() {
//   const { testimonials, setTestimonials, lastUpdate } = useFeedback();
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const q = query(collection(db, 'feedback'), orderBy('timestamp', 'desc'));
//         const querySnapshot = await getDocs(q);
        
//         const feedbackData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//           timestamp: doc.data().timestamp?.toDate()
//         }));

//         // Sort by rating (highest to lowest) and then by timestamp (newest to oldest)
//         const sortedFeedback = feedbackData.sort((a, b) => {
//           // First compare ratings
//           if (b.rating !== a.rating) {
//             return b.rating - a.rating;
//           }
//           // If ratings are equal, compare timestamps
//           return b.timestamp - a.timestamp;
//         });

//         setTestimonials(sortedFeedback);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//       }
//     };

//     fetchTestimonials();
//   }, [lastUpdate, setTestimonials]);

//   const prevSlide = () => {
//     const newIndex = index - 2;
//     if (newIndex < 0) {
//       const lastPairIndex = Math.floor((testimonials.length - 1) / 2) * 2;
//       setIndex(lastPairIndex);
//     } else {
//       setIndex(newIndex);
//     }
//   };

//   const nextSlide = () => {
//     const newIndex = index + 2;
//     if (newIndex >= testimonials.length) {
//       setIndex(0);
//     } else {
//       setIndex(newIndex);
//     }
//   };

//   // Show navigation buttons only if there are more than 2 testimonials
//   const showNavigation = testimonials.length > 2;

//   return (
//     <div className="py-16 bg-gradient-to-r from-blue-100 via-white to-blue-100 relative">
//       {/* Heading */}
//       <h2 className="text-4xl font-bold font-[lato] text-center">
//         What People Think <span className="text-blue-500 font-[lato]">About Us</span>
//       </h2>

//       {/* Testimonial Container */}
//       <div className="relative flex justify-center items-center mt-10">
//         {showNavigation && (
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 font-[lato] bg-white shadow-lg p-3 rounded-full hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-110"
//           >
//             <FaChevronLeft />
//           </button>
//         )}

//         {/* Testimonial Cards */}
//         <motion.div 
//   key={index} 
//   className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4"
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
// >
//   {/* Only show testimonials if they exist */}
//   {testimonials.length > 0 && testimonials
//     .slice(index, Math.min(index + 2, testimonials.length))
//     .map((testimonial) => (
//       <motion.div
//         key={testimonial.id}
//         className="bg-white shadow-xl font-[lato] p-4 sm:p-6 rounded-lg border border-gray-200 backdrop-blur-md bg-opacity-75 transition-transform transform hover:scale-105 hover:shadow-2xl 
//         w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto flex flex-col justify-between mx-auto"
//         whileHover={{ scale: 1.05 }}
//       >
//         {/* Stars */}
//         <div className="flex space-x-1 text-yellow-400">
//           {[...Array(testimonial.rating || 5)].map((_, i) => (
//             <FaStar key={i} />
//           ))}
//         </div>

//         {/* Review */}
//         <p className="text-gray-600 font-[lato] mt-3 italic overflow-y-auto text-sm sm:text-base flex-grow">
//           "{testimonial.message}"
//         </p>

//         {/* User Info */}
//         <div className="mt-4 pt-2 border-t border-gray-100">
//           <h4 className="text-base sm:text-lg font-semibold font-[lato] text-gray-800">
//             {testimonial.full_name}
//           </h4>
//           <p className="text-gray-500 text-xs sm:text-sm">
//             {new Date(testimonial.timestamp).toLocaleDateString()}
//           </p>
//         </div>
//       </motion.div>
//     ))}
// </motion.div>

//         {showNavigation && (
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 bg-white shadow-lg font-[lato] p-3 rounded-full hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-110"
//           >
//             <FaChevronRight />
//           </button>
//         )}
//       </div>

      
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { useFeedback } from '../context/FeedbackContext';
import db from "../firebase";

export default function Testimonials() {
  const { testimonials, setTestimonials, lastUpdate } = useFeedback();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState({}); // Track expanded state per testimonial

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const q = query(collection(db, 'feedback'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const feedbackData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate()
        }));

        // Sort by rating (highest to lowest) and then by timestamp (newest to oldest)
        const sortedFeedback = feedbackData.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.timestamp - a.timestamp;
        });

        setTestimonials(sortedFeedback);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, [lastUpdate, setTestimonials]);

  const prevSlide = () => {
    setIndex(prev => (prev - 2 < 0 ? Math.floor((testimonials.length - 1) / 2) * 2 : prev - 2));
    setExpanded({}); // Reset expanded state when sliding
  };

  const nextSlide = () => {
    setIndex(prev => (prev + 2 >= testimonials.length ? 0 : prev + 2));
    setExpanded({}); // Reset expanded state when sliding
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showNavigation = testimonials.length > 2;

  return (
    <div className="py-16 bg-gradient-to-r from-blue-100 via-white to-blue-100 relative">
      <h2 className="text-4xl font-bold font-[lato] text-center">
        What People Think <span className="text-blue-500 font-[lato]">About Us</span>
      </h2>

      <div className="relative flex justify-center items-center mt-10">
        {showNavigation && (
          <button onClick={prevSlide} className="absolute left-0 font-[lato] bg-white shadow-lg p-3 rounded-full hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-110">
            <FaChevronLeft />
          </button>
        )}

        <motion.div 
          key={index} 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.length > 0 && testimonials
            .slice(index, Math.min(index + 2, testimonials.length))
            .map((testimonial) => {
              const isExpanded = expanded[testimonial.id] || false;
              const truncatedText = testimonial.message.length > 100 ? testimonial.message.substring(0, 100) + "..." : testimonial.message;

              return (
                <motion.div
                  key={testimonial.id}
                  className="bg-white shadow-xl font-[lato] p-4 sm:p-6 rounded-lg border border-gray-200 backdrop-blur-md bg-opacity-75 transition-transform transform hover:scale-105 hover:shadow-2xl 
                  w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto flex flex-col justify-between mx-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-600 font-[lato] mt-3 italic overflow-y-auto text-sm sm:text-base flex-grow">
                    {isExpanded ? testimonial.message : truncatedText}
                  </p>

                  {testimonial.message.length > 100 && (
                    <button 
                      onClick={() => toggleExpand(testimonial.id)} 
                      className="text-blue-500 text-sm mt-2 font-semibold underline cursor-pointer"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="mt-4 pt-2 border-t border-gray-100">
                    <h4 className="text-base sm:text-lg font-semibold font-[lato] text-gray-800">
                      {testimonial.full_name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {new Date(testimonial.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>

        {showNavigation && (
          <button onClick={nextSlide} className="absolute right-0 bg-white shadow-lg font-[lato] p-3 rounded-full hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-110">
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}
