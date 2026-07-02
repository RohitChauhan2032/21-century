import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollProgress from './components/layout/ScrollProgress';
import CustomCursor from './components/layout/CustomCursor';
import FloatingWidgets from './components/layout/FloatingWidgets';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS scroll reveals
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>21st Century Enviro Engineers - Sustainable Water Solutions</title>
          <meta name="description" content="Innovative Environmental Engineering Company Delivering Water, Wastewater and Industrial Infrastructure Solutions." />
          <meta name="keywords" content="ETP, STP, ZLD, Water Treatment Plant, Reverse Osmosis, Demineralization, Sewage Treatment, Effluent Treatment" />
        </Helmet>
        
        {/* Premium Layout Items */}
        <ScrollProgress />
        <CustomCursor />
        <FloatingWidgets />
        
        <div className="flex flex-col min-h-screen bg-bg-base font-sans">
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
