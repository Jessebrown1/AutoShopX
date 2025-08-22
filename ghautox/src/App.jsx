import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";   // ✅ import ToastContainer
import "react-toastify/dist/ReactToastify.css";    // ✅ import styles

import Mechanics from "./assets/Components/MechanicsPage/MechanicsPage";
import MechanicProfile from "./assets/Components/MechanicProfile/MechanicProfile";
import Header from "./assets/Components/Header/Header";
import Footer from "./assets/Components/Footer/Footer";
import Filterbar from "./assets/Components/Filterbar/Filterbar";
import MarketplaceProductPage from "./assets/Components/ProductPage/MarketplaceProductPage";
import Sellparts from "./assets/Components/Sellparts/Sellparts";

function Layout() {
  const location = useLocation();

  // hide global header only on mechanics routes
  const isMechanicsRoute = location.pathname.startsWith("/mechanics");

  return (
    <div className="w-full overflow-hidden">
      {!isMechanicsRoute && <Header />}

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Filterbar />} />

        <Route path="/sellparts" element={<Sellparts />} /> {/* ✅ lowercase */}

        {/* Mechanics */}
        <Route path="/mechanics" element={<Mechanics />} />
        <Route path="/mechanic/:slug" element={<MechanicProfile />} /> 

        {/* Marketplace */}
        <Route path="/marketplace" element={<Filterbar />} />
        <Route path="/product/:id" element={<MarketplaceProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
      {/* ✅ ToastContainer here (once only) */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
