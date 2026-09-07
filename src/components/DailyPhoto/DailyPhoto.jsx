import GalleryCard from "../GalleryCard/GalleryCard";
import Preloader from "../Preloader/Preloader";
import "../Gallery/Gallery.css";
import "./DailyPhoto.css";

function DailyPhoto({
  photo,
  isLoading,
  errorMessage,
  onRefresh,
  favorites,
  onFavoriteClick,
}) {
  const isFavorite = photo
    ? favorites.some((fav) => fav.id === photo.id)
    : false;

  return (
    <section className="gallery daily-photo">
      <h1 className="gallery__title">Foto do dia</h1>
      <p className="daily-photo__subtitle">
        Uma inspiração nova por dia pra você não perder o ritmo ✨
      </p>

      {isLoading && <Preloader />}

      {!isLoading && errorMessage && (
        <p className="gallery__message gallery__message_error">
          {errorMessage}
        </p>
      )}

      {!isLoading && !errorMessage && photo && (
        <>
          <div className="daily-photo__card">
            <GalleryCard
              imageUrl={photo.urls.small}
              description={photo.alt_description}
              photographerName={photo.user.name}
              photographerUrl={photo.user.links.html}
              isFavorite={isFavorite}
              onFavoriteClick={() => onFavoriteClick(photo)}
            />
          </div>

          <button
            type="button"
            className="gallery__search-clear daily-photo__refresh"
            onClick={onRefresh}
          >
            Quero outra inspiração
          </button>
        </>
      )}
    </section>
  );
}

export default DailyPhoto;
