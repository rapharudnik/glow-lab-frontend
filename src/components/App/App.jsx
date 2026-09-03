import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Gallery from "../GalleryCard/GalleryCard";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/inspiracoes" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
