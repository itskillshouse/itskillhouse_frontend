import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";

// Components
import SmoothScroll from "./components/SmoothScroll";
import MouseChaser from "./components/MouseChaser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";
import TopLine from "./components/TopLine";
import BlobTransition from "./components/BlobTransition";
import Preloader from "./components/Preloader";
import NewsletterPopup from "./pages/newsLetter/NewsletterPopup";
import NotFound from "./components/NotFound.jsx";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Route pages are split so each screen only loads its own feature bundle.
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Expertise = lazy(() => import("./pages/Expertise"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddBlog = lazy(() => import("./pages/blogs/AddBlog"));
const EditBlog = lazy(() => import("./pages/blogs/EditBlog"));
const BlogDetail = lazy(() => import("./pages/blogs/BlogDetail"));
const ViewBlogs = lazy(() => import("./pages/blogs/ViewBlogs"));
const AllBlogs = lazy(() => import("./pages/blogs/AllBlogs"));
const EditInquiry = lazy(() => import("./pages/inquiries/EditInquiry"));
const InquiryDetails = lazy(() => import("./pages/inquiries/InquiryDetails"));
const InquiryList = lazy(() => import("./pages/inquiries/InquiryList"));
const SubscribeForm = lazy(() => import("./pages/newsLetter/SubscribeForm"));
const NewsletterForm = lazy(() => import("./pages/newsLetter/NewsletterForm"));
const SubscriberList = lazy(() => import("./pages/newsLetter/SubscriberList"));
const AnalyticsChart = lazy(() => import("./pages/newsLetter/AnalyticsChart"));
const StudentCreate = lazy(() => import("./pages/students/StudentCreate.jsx"));
const StudentList = lazy(() => import("./pages/students/StudentList.jsx"));
const ViewStudent = lazy(() => import("./pages/students/ViewStudent.jsx"));
const StudentResult = lazy(() => import("./pages/students/StudentResult.jsx"));
const AddPortfolio = lazy(() => import("./pages/Portfolio/AddPortfolio.jsx"));
const EditPortfolio = lazy(() => import("./pages/Portfolio/EditPortfolio.jsx"));
const PortfolioList = lazy(() => import("./pages/Portfolio/PortfolioList.jsx"));
const TestimonialsList = lazy(() => import("./pages/testimonials/TestimonialsList.jsx"));
const EditTestimonial = lazy(() => import("./pages/testimonials/EditTestimonial.jsx"));
const AddTestimonial = lazy(() => import("./pages/testimonials/AddTestimonial.jsx"));

import ProtectedRoute from "./routes/ProtectedRoute";


// batches
const CreateBatch = lazy(() => import("./pages/batches/CreateBatch.jsx"));
const BatchesList = lazy(() => import("./pages/batches/BatchesList.jsx"));
const EditBatch = lazy(() => import("./pages/batches/EditBatch.jsx"));
const BatchDetails = lazy(() => import("./pages/batches/BatchDetails.jsx"));
import ScrollToTop from "./components/ScrollToTop.jsx";


// admin routes
const ForgotPassword = lazy(() => import("./pages/admin/ForgotPassword.jsx"));
const ResetPassword = lazy(() => import("./pages/admin/ResetPassword.jsx"));
const AdminProfile = lazy(() => import("./pages/admin/AdminProfile.jsx"));
const CreateAdmin = lazy(() => import("./pages/admin/CreateAdmin.jsx"));
const UpdateProfile = lazy(() => import("./pages/admin/UpdateProfile.jsx"));


// Page Animation Wrapper
const AnimatedPageWrapper = ({ children }) => (
  <Motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </Motion.div>
);

// Main Layout
const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isStudentResult = location.pathname === "/student-result";

  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      <TopLine />
      <MouseChaser />

      {/* Header hide on admin */}
      {!isAdminRoute && (
        <Header isOpen={isHeaderOpen} setIsOpen={setIsHeaderOpen} />
      )}

      {/* Newsletter hide on admin */}
      {!isAdminRoute && !isStudentResult && <NewsletterPopup />}

      <AnimatePresence mode="wait">
        <Motion.div key={location.pathname}>
           <ScrollToTop />
          <Suspense fallback={<div className="p-8 text-center">Loading page...</div>}>
          <Routes location={location}>
 
            {/* Public Routes */}
            <Route path="/" element={<AnimatedPageWrapper><Home /></AnimatedPageWrapper>} />
            <Route path="/about" element={<AnimatedPageWrapper><About /></AnimatedPageWrapper>} />
            <Route path="/expertise" element={<AnimatedPageWrapper><Expertise /></AnimatedPageWrapper>} />
            <Route path="/blog" element={<AnimatedPageWrapper><Blog /></AnimatedPageWrapper>} />
            <Route path="/contact" element={<AnimatedPageWrapper><Contact /></AnimatedPageWrapper>} />
            <Route path="/services" element={<AnimatedPageWrapper><Services /></AnimatedPageWrapper>} />
            <Route path="/work" element={<AnimatedPageWrapper><Work /></AnimatedPageWrapper>} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/blogs" element={<AnimatedPageWrapper><ViewBlogs /></AnimatedPageWrapper>} />
            <Route path="/" element={<SubscribeForm />} />
            <Route path="/student-result" element={<StudentResult />} />

            {/* Admin Login */}
            <Route path="/admin/login" element={<AnimatedPageWrapper><Login /></AnimatedPageWrapper>} />
            <Route path="/admin/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin/reset-password/:token" element={<ResetPassword />} />

            {/* Protected Admin */}
            <Route path="/admin" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>




              <Route path="dashboard" element={<Dashboard />} />
              <Route path="blogs/add" element={<AddBlog />} />
              <Route path="blogs/edit/:id" element={<EditBlog />} />
              <Route path="blogs" element={<AllBlogs />} />

              <Route path="inquiries" element={<InquiryList />} />
              <Route path="inquiries/:id" element={<InquiryDetails />} />
              <Route path="inquiries/:id/edit" element={<EditInquiry />} />

              <Route path="newsletterForm" element={<NewsletterForm />} />
              <Route path="subscribers" element={<SubscriberList />} />
              <Route path="analytics" element={<AnalyticsChart />} />

              <Route path="studentCreate" element={<StudentCreate />} />
              <Route path="studentlist" element={<StudentList />} />
              <Route path="students/:studentId" element={<ViewStudent />} />

              <Route path="portfolio" element={<PortfolioList />} />
              <Route path="portfolio/add" element={<AddPortfolio />} />
              <Route path="portfolio/edit/:id" element={<EditPortfolio />} />

              <Route path="testimonials" element={<TestimonialsList />} />
              <Route path="testimonials/add" element={<AddTestimonial />} />
              <Route path="testimonials/edit/:id" element={<EditTestimonial />} />

            <Route path="profile" element={<AdminProfile />} />
            <Route path="create-admin" element={<CreateAdmin />} />
            <Route path="update-profile" element={<UpdateProfile />} />


            {/* batches */}
<Route path="batches" element={<BatchesList />} />
<Route path="batches/create" element={<CreateBatch />} />
<Route path="batches/edit/:id" element={<EditBatch />} />
<Route path="batches/:id" element={<BatchDetails />} />

            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound/>} />
          </Routes>
          </Suspense>
        </Motion.div>
      </AnimatePresence>

      <BlobTransition />

      {/* Footer hide on admin */}
      {!isAdminRoute && <Footer />}

      {/* WhatsApp hide on admin */}
      {!isAdminRoute && !isHome && (
        <WhatsAppButton isHeaderOpen={isHeaderOpen} />
      )}

      <BackToTopButton />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

// Preloader Wrapper
const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firstVisit = sessionStorage.getItem("firstVisit") !== "false";

    if (firstVisit) {
      const timeout = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("firstVisit", "false");
      }, 3000);

      return () => clearTimeout(timeout);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <AnimatePresence mode="wait">
        <Preloader key="preloader" useLottie />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Layout key="layout" />
    </AnimatePresence>
  );
};

// Final Export
export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
