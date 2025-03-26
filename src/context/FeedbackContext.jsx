import { createContext, useState, useContext } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [testimonials, setTestimonials] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const updateFeedback = () => {
    setLastUpdate(Date.now());
  };

  return (
    <FeedbackContext.Provider value={{ testimonials, setTestimonials, lastUpdate, updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
} 