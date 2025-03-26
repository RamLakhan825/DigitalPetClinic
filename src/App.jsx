import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import Footer from "./Component/Footer.jsx";
import Contact from "./Component/Contact.jsx";
import Testimonial from "./Component/testimonial.jsx";
import { FeedbackProvider } from './context/FeedbackContext';
import Landingpage from "./Component/Landingpage.jsx";
import BookConsultation from "./Component/BookConsultation.jsx";
import Before from "./Component/Before.jsx"
import Terms from "./Component/Terms.jsx"
import Privacy from "./Component/privacy.jsx"

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/Landingpage" element={<Landingpage />} />
            <Route path="/Before" element={<Before />} /> {/* Add this line */}
            <Route path="/BookConsultation" element={<BookConsultation />} /> {/* Add this line */}
            <Route path="/Terms" element={<Terms />} /> {/* New route */}
            <Route path="/Privacy" element={<Privacy />} /> {/* New route */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
