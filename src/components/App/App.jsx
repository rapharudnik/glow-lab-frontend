import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Gallery from "../Gallery/Gallery";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import { searchPhotos } from "../../utils/UnsplashApi";
import { ERROR_MESSAGE, DEFAULT_QUERY } from "../../utils/constants";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage("");

    searchPhotos(DEFAULT_QUERY)
      .then((data) => {
        setPhotos(data.results);
      })
      .catch(() => {
        setErrorMessage(ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/inspiracoes"
          element={
            <Gallery
              photos={photos}
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
