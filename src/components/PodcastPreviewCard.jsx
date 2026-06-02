import { formatUpdatedDate } from "../utils/dateUtils.js";
import { getGenreNames } from "../utils/genreUtils.js";

/**
 * Displays one podcast preview card.
 * @param {object} props - Component props.
 * @param {object} props.podcast - Podcast preview data.
 * @returns {JSX.Element} Podcast preview card.
 */
export default function PodcastPreviewCard({ podcast }) {
  const genreNames = getGenreNames(podcast.genres);
  const seasonLabel = podcast.seasons === 1 ? "season" : "seasons";

  return (
    <article className="podcast-card">
      <img className="podcast-card__image" src={podcast.image} alt={`${podcast.title} cover`} />
      <h2 className="podcast-card__title">{podcast.title}</h2>
      <p className="podcast-card__meta">{podcast.seasons} {seasonLabel}</p>
      <div className="podcast-card__genres" aria-label={`Genres for ${podcast.title}`}>
        {genreNames.map((genreName) => (
          <span className="genre-tag" key={genreName}>{genreName}</span>
        ))}
      </div>
      <p className="podcast-card__updated">{formatUpdatedDate(podcast.updated)}</p>
    </article>
  );
}
