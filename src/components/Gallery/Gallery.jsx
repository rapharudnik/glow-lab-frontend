import { useState } from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import Preloader from "../Preloader/Preloader";
import { ITEMS_PER_PAGE, CATEGORIES } from "../../utils/constants";
import "./Gallery.css";

function Gallery({
  photos,
  isLoading,
  errorMessage,
  searchResults,
  isSearchLoading,
  searchErrorMessage,
  hasSearched,
  onSearch,
  onClearSearch,
  favorites,
  onFavoriteClick,
}) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [inputValue, setInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  function handleShowMore() {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setActiveCategory(null);
    onSearch(inputValue.trim());
  }

  function handleCategoryClick(category) {
    setInputValue("");
    setActiveCategory(category.label);
    onSearch(category.query);
  }

  function handleClear() {
    setInputValue("");
    setActiveCategory(null);
    onClearSearch();
  }

  function isFavorite(photoId) {
    return favorites.some((fav) => fav.id === photoId);
  }

  const displayedPhotos = hasSearched
    ? searchResults
    : photos.slice(0, visibleCount);
  const displayedIsLoading = hasSearched ? isSearchLoading : isLoading;
  const displayedErrorMessage = hasSearched ? searchErrorMessage : errorMessage;

  return (
    <section className="gallery">
      <h1 className="gallery__title">Inspirações</h1>

      <form className="gallery__search-form" onSubmit={handleSubmit}>
        <input
          className="gallery__search-input"
          type="text"
          placeholder="Buscar por unhas, cabelo, spa..."
          value={inputValue}
          onChange={handleChange}
        />
        <button className="gallery__search-button" type="submit">
          Buscar
        </button>
        {hasSearched && (
          <button
            className="gallery__search-clear"
            type="button"
            onClick={handleClear}
          >
            Limpar busca
          </button>
        )}
      </form>

      <div className="gallery__categories">
        {CATEGORIES.map((category) => (
          <button
            key={category.label}
            type="button"
            className={`gallery__category ${activeCategory === category.label ? "gallery__category_active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {displayedIsLoading && <Preloader />}

      {!displayedIsLoading && displayedErrorMessage && (
        <p className="gallery__message gallery__message_error">
          {displayedErrorMessage}
        </p>
      )}

      {!displayedIsLoading &&
        !displayedErrorMessage &&
        displayedPhotos.length === 0 && (
          <p className="gallery__message">
            {hasSearched
              ? "Nenhum resultado encontrado pra essa busca."
              : "Nenhuma inspiração encontrada por aqui."}
          </p>
        )}

      {!displayedIsLoading &&
        !displayedErrorMessage &&
        displayedPhotos.length > 0 && (
          <>
            <div className="gallery__grid">
              {displayedPhotos.map((photo) => (
                <GalleryCard
                  key={photo.id}
                  imageUrl={photo.urls.small}
                  description={photo.alt_description}
                  photographerName={photo.user.name}
                  photographerUrl={photo.user.links.html}
                  isFavorite={isFavorite(photo.id)}
                  onFavoriteClick={() => onFavoriteClick(photo)}
                />
              ))}
            </div>

            {!hasSearched && visibleCount < photos.length && (
              <button
                type="button"
                className="gallery__show-more"
                onClick={handleShowMore}
              >
                Mostrar mais
              </button>
            )}
          </>
        )}
    </section>
  );
}

export default Gallery;
