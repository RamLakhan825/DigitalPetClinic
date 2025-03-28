// import React from "react";
// import { Link } from "react-router-dom";
// import dog from "./photos/sad.jpg"; // Same image used, can be swapped if needed
// import { motion } from "framer-motion";

// const PaymentFailed = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5] px-6">
//             <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-4xl w-full">
//                 {/* Text Section */}
//                 <div className="bg-blue-100 rounded-lg p-6 md:p-10 w-full md:w-2/3 space-y-4">
//                     <span className="text-blue-700 font-semibold text-lg tracking-wide">
//                         Digital Pet Clinic
//                     </span>
//                     <h2 className="text-4xl font-extrabold text-red-700">
//                         Uh-oh! Payment Didn't Go Through 🚧
//                     </h2>
//                     <p className="text-gray-700 text-lg">
//                         Looks like something got stuck on the way! But don’t worry—your pet’s consultation is just a step away.
//                     </p>
                   

//                     <h3 className="text-2xl font-bold text-red-600 mt-4">What’s Next?</h3>
//                     <ul className="list-disc pl-5 text-gray-700 text-lg">
//                         <li>🔄 <strong>Try Again</strong> – Give it another go and complete your booking.</li>
//                         <li>🛠️ <strong>Need Help?</strong> – Our team is happy to assist you!</li>
//                     </ul>

//                     <p className="mt-4 text-lg text-gray-700">
//                         Your pet deserves the best care, and we’re here to make it happen. Let’s get back on track!
//                     </p>

//                     <a
//                         href="/Bookconsultation"
//                         className="inline-block bg-blue-600 text-white px-6 py-2 font-[Lato] font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300 mr-4"
//                     >
//                         Retry Payment
//                     </a>
//                     <a
//                         href="/"
//                         className="inline-block bg-blue-600 text-white px-6 py-2 font-[Lato] font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
//                     >
//                         Go to home
//                     </a>
//                 </div>

//                 {/* Image Section */}
//                 <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
//                     <img
//                         src={dog}
//                         alt="Sad Dog"
//                         className="w-64 h-64 object-cover rounded-lg shadow-md"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentFailed;






import React from "react";
import { Link } from "react-router-dom";
import dog from "./photos/sad.jpg"; // Same image used, can be swapped if needed
import { motion } from "framer-motion";

const PaymentFailed = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5] px-6">
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center max-w-4xl w-full">
                {/* Text Section */}
                <div className="bg-blue-100 rounded-lg p-6 md:p-10 w-full md:w-2/3 space-y-4 flex-1">
                    <span className="text-blue-700 font-semibold text-lg tracking-wide">
                        Digital Pet Clinic
                    </span>
                    <h2 className="text-4xl font-extrabold text-red-700">
                        Uh-oh! Payment Didn't Go Through 🚧
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Looks like something got stuck on the way! But don’t worry—your pet’s consultation is just a step away.
                    </p>

                    <h3 className="text-2xl font-bold text-red-600 mt-4">What’s Next?</h3>
                    <ul className="list-disc pl-5 text-gray-700 text-lg">
                        <li>🔄 <strong>Try Again</strong> – Give it another go and complete your booking.</li>
                        <li>🛠️ <strong>Need Help?</strong> – Our team is happy to assist you!</li>
                    </ul>

                    <p className="mt-4 text-lg text-gray-700">
                        Your pet deserves the best care, and we’re here to make it happen. Let’s get back on track!
                    </p>

                    <a
                        href="/Bookconsultation"
                        className="inline-block bg-blue-600 text-white px-6 py-2 font-[Lato] font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300 mr-4"
                    >
                        Retry Payment
                    </a>
                    <a
                        href="/"
                        className="inline-block bg-blue-600 text-white px-6 py-2 font-[Lato] font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Go to home
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0 flex-1">
                    <img
                        src={dog}
                        alt="Sad Dog"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentFailed;