import { useState } from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.css";

const MOCK_PHOTOS = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/id/1011/600/600",
    description: "Rotina de skincare matinal",
    photographerName: "Foto de exemplo",
    photographerUrl: "#",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/id/1027/600/600",
    description: "Momento de autocuidado",
    photographerName: "Foto de exemplo",
    photographerUrl: "#",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/id/1005/600/600",
    description: "Produtos de beleza",
    photographerName: "Foto de exemplo",
    photographerUrl: "#",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/id/1012/600/600",
    description: "Spa em casa",
    photographerName: "Foto de exemplo",
    photographerUrl: "#",
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/id/1013/600/600",
    description: "Inspiração para conteúdo",
    photographerName: "Foto de exemplo",
    photographerUrl: "#",
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/id/1025/600/600",
    description: "Bem-estar diário",
    photographerName: "Foto de exemplo",
    photographerUrl: "#",
  },
];

const ITEMS_PER_PAGE = 3;

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visiblePhotos = MOCK_PHOTOS.slice(0, visibleCount);
  const hasMore = visibleCount < MOCK_PHOTOS.length;

  return (
    <section className="gallery">
      <h1 className="gallery__title">Inspirações</h1>
      <div className="gallery__grid">
        {visiblePhotos.map((photo) => (
          <GalleryCard
            key={photo.id}
            imageUrl={photo.imageUrl}
            description={photo.description}
            photographerName={photo.photographerName}
            photographerUrl={photo.photographerUrl}
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
    </section>
  );
}

export default Gallery;
