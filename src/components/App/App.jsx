import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Gallery from "../Gallery/Gallery";
import Favorites from "../Favorites/Favorites";
import DailyPhoto from "../DailyPhoto/DailyPhoto";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import { searchPhotos, getRandomPhoto } from "../../utils/UnsplashApi";
import {
  ERROR_MESSAGE,
  DEFAULT_QUERY,
  PHOTOS_STORAGE_KEY,
  FAVORITES_STORAGE_KEY,
  RANDOM_PHOTO_STORAGE_KEY,
} from "../../utils/constants";
import "./App.css";
import Tips from "../Tips/Tips";

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [favorites, setFavorites] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const [randomPhoto, setRandomPhoto] = useState(null);
  const [isRandomLoading, setIsRandomLoading] = useState(false);
  const [randomErrorMessage, setRandomErrorMessage] = useState("");

  function fetchRandomPhoto(date) {
    setIsRandomLoading(true);
    setRandomErrorMessage("");
    getRandomPhoto(DEFAULT_QUERY)
      .then((photo) => {
        setRandomPhoto(photo);
        localStorage.setItem(
          RANDOM_PHOTO_STORAGE_KEY,
          JSON.stringify({ date, photo }),
        );
      })
      .catch(() => setRandomErrorMessage(ERROR_MESSAGE))
      .finally(() => setIsRandomLoading(false));
  }

  useEffect(() => {
    const savedPhotos = localStorage.getItem(PHOTOS_STORAGE_KEY);
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    } else {
      setIsLoading(true);
      setErrorMessage("");
      searchPhotos(DEFAULT_QUERY)
        .then((data) => {
          setPhotos(data.results);
          localStorage.setItem(
            PHOTOS_STORAGE_KEY,
            JSON.stringify(data.results),
          );
        })
        .catch(() => setErrorMessage(ERROR_MESSAGE))
        .finally(() => setIsLoading(false));
    }

    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    const today = getTodayKey();
    const savedRandom = localStorage.getItem(RANDOM_PHOTO_STORAGE_KEY);
    if (savedRandom) {
      const parsed = JSON.parse(savedRandom);
      if (parsed.date === today) {
        setRandomPhoto(parsed.photo);
      } else {
        fetchRandomPhoto(today);
      }
    } else {
      fetchRandomPhoto(today);
    }
  }, []);

  function handleFavoriteClick(photo) {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.id === photo.id,
      );
      const updatedFavorites = isAlreadyFavorite
        ? prevFavorites.filter((fav) => fav.id !== photo.id)
        : [...prevFavorites, photo];
      localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(updatedFavorites),
      );
      return updatedFavorites;
    });
  }

  function handleSearch(query) {
    setHasSearched(true);
    setIsSearchLoading(true);
    setSearchErrorMessage("");
    searchPhotos(query)
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch(() => setSearchErrorMessage(ERROR_MESSAGE))
      .finally(() => setIsSearchLoading(false));
  }

  function handleClearSearch() {
    setHasSearched(false);
    setSearchResults([]);
    setSearchErrorMessage("");
  }

  function handleRefreshRandomPhoto() {
    fetchRandomPhoto(getTodayKey());
  }

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
              searchResults={searchResults}
              isSearchLoading={isSearchLoading}
              searchErrorMessage={searchErrorMessage}
              hasSearched={hasSearched}
              onSearch={handleSearch}
              onClearSearch={handleClearSearch}
              favorites={favorites}
              onFavoriteClick={handleFavoriteClick}
            />
          }
        />
        <Route
          path="/favoritos"
          element={
            <Favorites
              photos={favorites}
              onFavoriteClick={handleFavoriteClick}
            />
          }
        />
        <Route
          path="/foto-do-dia"
          element={
            <DailyPhoto
              photo={randomPhoto}
              isLoading={isRandomLoading}
              errorMessage={randomErrorMessage}
              onRefresh={handleRefreshRandomPhoto}
              favorites={favorites}
              onFavoriteClick={handleFavoriteClick}
            />
          }
        />

        <Route path="/dicas" element={<Tips />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
