import "./GalleryCard.css";

function GalleryCard({
  imageUrl,
  description,
  photographerName,
  photographerUrl,
  isFavorite,
  onFavoriteClick,
}) {
  return (
    <article className="gallery-card">
      <img
        className="gallery-card__image"
        src={imageUrl}
        alt={description || "Foto de inspiração"}
      />
      <button
        type="button"
        className={`gallery-card__favorite ${isFavorite ? "gallery-card__favorite_active" : ""}`}
        onClick={onFavoriteClick}
        aria-label={
          isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      {description && (
        <p className="gallery-card__description">{description}</p>
      )}
      <a
        className="gallery-card__credit"
        href={photographerUrl}
        target="_blank"
        rel="noreferrer"
      >
        📷 {photographerName}
      </a>
    </article>
  );
}

export default GalleryCard;
