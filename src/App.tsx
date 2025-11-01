import Header from "./components/common/layout/Header";
import Navigation from "./components/common/layout/Navigation";
import { useEffect, useRef, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when sentinel is not intersecting, header has scrolled past
          setIsSticky(!entry.isIntersecting);
        });
      },
      { root: null, threshold: 0 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex flex-col bg-background">
        {/* Header stays in the flow and is only visually hidden when sticky */}
        <div
          className={`transform transition-all duration-500 ease-in-out origin-top ${
            isSticky
              ? "-translate-y-6 opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
        >
          <Header />
        </div>

        {/* sentinel to observe when header crosses the viewport */}
        <div ref={sentinelRef} className="w-full h-0" />

        {/* Navigation becomes fixed to top when sentinel has left the viewport */}
        <div
          className={`${
            isSticky ? "fixed top-0 left-0 w-full z-20" : "relative w-full z-20"
          }`}
        >
          <Navigation />
        </div>
      </div>

      <main className={`p-4 text-text ${isSticky ? "pt-15" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
