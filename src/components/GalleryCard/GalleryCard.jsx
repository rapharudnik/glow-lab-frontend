import "./GalleryCard.css";

function GalleryCard({
  imageUrl,
  description,
  photographerName,
  photographerUrl,
}) {
  return (
    <article className="gallery-card">
      <img
        className="gallery-card__image"
        src={imageUrl}
        alt={description || "Foto de inspiração"}
      />
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
