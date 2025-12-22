import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Customers from "./components/Customers";
// import Testimonials from "./components/Testimonials"; // Keeping it commented as it was in original

// Home Page Component
const Home = () => (
  <>
    <Hero />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="customers" element={<Customers />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<ContactForm />} />
          {/* Add other routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
