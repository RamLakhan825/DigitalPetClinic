import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import Footer from "./Component/Footer.jsx";
import Contact from "./Component/Contact.jsx";
import Testimonial from "./Component/testimonial.jsx";
import { FeedbackProvider } from './context/FeedbackContext';
import Landingpage from "./Component/Landingpage.jsx";
import BookConsultation from "./Component/BookConsultations.jsx"
import Before from "./Component/Before.jsx"
import Terms from "./Component/Terms.jsx"
import Privacy from "./Component/privacy.jsx"
import Confirmation from "./Component/success.jsx"
import PaymentFailed from "./Component/fail.jsx"


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
            <Route path="/Before" element={<Before />} /> 
            <Route path="/BookConsultation" element={<BookConsultation />} /> 
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Privacy" element={<Privacy />} /> 
            <Route path="/payment-success" element={<Confirmation />} />
            <Route path="/payment-fail" element={<PaymentFailed />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
