import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import ForInvestors from './components/ForInvestors';
import DiscoverStories from './components/DiscoverStories';
// import SliderSection from './components/SliderSection';
import Footer from './components/Footer';
import HealthRevivedPage from './pages/HealthRevivedPage';
import ScientistsPage from './pages/ScientistsPage';
import AppPage from './pages/AppPage';
import ResearchPage from './pages/ResearchPage';
import NanoDevPage from './pages/NanoDevPage';
import VideoIntroSection from "./components/VideoIntroSection";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // Disable right click
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable inspect shortcuts
    const disableShortcuts = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableShortcuts);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <VideoIntroSection />
                <ContentSection />
                <ForInvestors />
                <DiscoverStories />
                {/* <SliderSection /> */}
                <Footer />
              </>
            }
          />
          <Route path="/health-revived" element={<HealthRevivedPage />} />
          <Route path="/scientists" element={<ScientistsPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/nano-dev" element={<NanoDevPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;