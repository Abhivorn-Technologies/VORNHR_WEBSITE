import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import FeaturesPage from "./components/FeaturesPage";
import SolutionsPage from "./components/SolutionsPage";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";

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
          <Route path="features" element={<FeaturesPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
