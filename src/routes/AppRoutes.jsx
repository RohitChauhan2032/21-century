import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy loading page components
const Home = lazy(() => import('../components/pages/Home'));
const About = lazy(() => import('../components/pages/About'));
const Services = lazy(() => import('../components/pages/Services'));
const ServiceDetail = lazy(() => import('../components/pages/ServiceDetail'));
const Projects = lazy(() => import('../components/pages/Projects'));
const Industries = lazy(() => import('../components/pages/Industries'));
const Gallery = lazy(() => import('../components/pages/Gallery'));
const Blog = lazy(() => import('../components/pages/Blog'));
const Career = lazy(() => import('../components/pages/Career'));
const Contact = lazy(() => import('../components/pages/Contact'));
const NotFound = lazy(() => import('../components/pages/NotFound'));
const PrivacyPolicy = lazy(() => import('../components/pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('../components/pages/TermsConditions'));

// Loading skeleton fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
        Loading Engineering Desks...
      </span>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
