import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import FeaturesPage from "./components/FeaturesPage";
import SolutionsPage from "./components/SolutionsPage";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookiePolicy from "./components/CookiePolicy";
import SecurityPage from "./components/SecurityPage";
import UpdatesPage from "./components/UpdatesPage";
import AIPage from "./components/AIPage";
import ChatPage from "./components/ChatPage";
import AdvancedAnalyticsPage from "./components/AdvancedAnalyticsPage";
import NotificationsPage from "./components/NotificationsPage";
import RealTimeChatPage from "./components/RealTimeChatPage";
import AboutUsPage from "./components/AboutUsPage";
import BlogPage from "./components/BlogPage";
import HRMSIndiaPage from "./components/HRMSIndiaPage";
import PayrollSoftwarePage from "./components/PayrollSoftwarePage";
import AttendancePage from "./components/AttendancePage";
import LeavePage from "./components/LeavePage";
import EmployeeManagementPage from "./components/EmployeeManagementPage";
import HRMSForStartupsPage from "./components/HRMSForStartupsPage";
import HRMSForSMEsPage from "./components/HRMSForSMEsPage";
import DemoPage from "./components/DemoPage";
import DeleteAccountPage from "./components/DeleteAccountPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

// Page Transition Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.01, filter: "blur(4px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Home Page Component
const Home = () => (
  <>
    <Hero />
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="features" element={<PageTransition><FeaturesPage /></PageTransition>} />
          <Route path="solutions" element={<PageTransition><SolutionsPage /></PageTransition>} />
          <Route path="pricing" element={<PageTransition><PricingPage /></PageTransition>} />
          <Route path="contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
          <Route path="cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
          <Route path="security" element={<PageTransition><SecurityPage /></PageTransition>} />
          <Route path="updates" element={<PageTransition><UpdatesPage /></PageTransition>} />
          <Route path="ai" element={<PageTransition><AIPage /></PageTransition>} />
          <Route path="chat" element={<PageTransition><ChatPage /></PageTransition>} />
          <Route path="analytics" element={<PageTransition><AdvancedAnalyticsPage /></PageTransition>} />
          <Route path="notifications" element={<PageTransition><NotificationsPage /></PageTransition>} />
          <Route path="realtime-chat" element={<PageTransition><RealTimeChatPage /></PageTransition>} />
          <Route path="about" element={<PageTransition><AboutUsPage /></PageTransition>} />
          <Route path="blog" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="hrms-software-india" element={<PageTransition><HRMSIndiaPage /></PageTransition>} />
          <Route path="payroll-software" element={<PageTransition><PayrollSoftwarePage /></PageTransition>} />
          <Route path="attendance-management-software" element={<PageTransition><AttendancePage /></PageTransition>} />
          <Route path="leave-management-system" element={<PageTransition><LeavePage /></PageTransition>} />
          <Route path="employee-management-software" element={<PageTransition><EmployeeManagementPage /></PageTransition>} />
          <Route path="hrms-for-startups" element={<PageTransition><HRMSForStartupsPage /></PageTransition>} />
          <Route path="hrms-for-smes" element={<PageTransition><HRMSForSMEsPage /></PageTransition>} />
          <Route path="demo" element={<PageTransition><DemoPage /></PageTransition>} />
          <Route path="delete-account" element={<PageTransition><DeleteAccountPage /></PageTransition>} />
          <Route path="delete account" element={<PageTransition><DeleteAccountPage /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;

