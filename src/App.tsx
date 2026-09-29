import { useEffect, useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Trust } from "./components/Trust";
import { Offer } from "./components/Offer";
import { HowItWorks } from "./components/HowItWorks";
import { ForWho } from "./components/ForWho";
import { Founder } from "./components/Founder";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { ContactPage } from "./components/ContactPage";

const CONTACT_ROUTE = "#contact-page";

function getRoute(hash: string): "home" | "contact" {
  return hash === CONTACT_ROUTE ? "contact" : "home";
}

function App() {
  const [route, setRoute] = useState(() => getRoute(window.location.hash));

  useEffect(() => {
    function onHashChange() {
      setRoute(getRoute(window.location.hash));
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (route === "contact") {
      window.scrollTo(0, 0);
      return;
    }
    const hash = window.location.hash;
    if (hash && hash !== CONTACT_ROUTE) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [route]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg">
        <Header />
        <main>
          {route === "contact" ? (
            <ContactPage />
          ) : (
            <>
              <Hero />
              <Problem />
              <Trust />
              <Offer />
              <HowItWorks />
              <ForWho />
              <Founder />
              <FinalCta />
            </>
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
