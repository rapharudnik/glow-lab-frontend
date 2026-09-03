import { useState } from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import Preloader from "../Preloader/Preloader";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import "./Gallery.css";

function Gallery({ photos, isLoading, errorMessage }) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;

  return (
    <section className="gallery">
      <h1 className="gallery__title">Inspirações</h1>

      {isLoading && <Preloader />}

      {!isLoading && errorMessage && (
        <p className="gallery__message">{errorMessage}</p>
      )}

      {!isLoading && !errorMessage && photos.length === 0 && (
        <p className="gallery__message">Nada encontrado</p>
      )}

      {!isLoading && !errorMessage && photos.length > 0 && (
        <>
          <div className="gallery__grid">
            {visiblePhotos.map((photo) => (
              <GalleryCard
                key={photo.id}
                imageUrl={photo.urls.small}
                description={photo.alt_description}
                photographerName={photo.user.name}
                photographerUrl={photo.user.links.html}
              />
            ))}
          </div>
          {hasMore && (
            <button
              className="gallery__show-more"
              type="button"
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
