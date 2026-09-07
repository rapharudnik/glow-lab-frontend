import GalleryCard from "../GalleryCard/GalleryCard";
import "../Gallery/Gallery.css";

function Favorites({ photos, onFavoriteClick }) {
  return (
    <section className="gallery">
      <h1 className="gallery__title">Favoritos</h1>

      {photos.length === 0 && (
        <p className="gallery__message">
          Você ainda não favoritou nenhuma foto. Vá até as inspirações e clique
          no 🤍 pra salvar suas preferidas aqui!
        </p>
      )}

      {photos.length > 0 && (
        <div className="gallery__grid">
          {photos.map((photo) => (
            <GalleryCard
              key={photo.id}
              imageUrl={photo.urls.small}
              description={photo.alt_description}
              photographerName={photo.user.name}
              photographerUrl={photo.user.links.html}
              isFavorite
              onFavoriteClick={() => onFavoriteClick(photo)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
