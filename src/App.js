import Aos from "aos";
import "./App.css"
import "./index.css"
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  Aos.init({
    once: true,
    duration: 1000,
  });

  return (
  <>
      { loading && <PreLoader /> }
      <div className=" overflow-hidden">
      <BackToTop />
      <Header />
      <Hero />
      <Form />
        </div>
      </>
  );
}

export default App;

