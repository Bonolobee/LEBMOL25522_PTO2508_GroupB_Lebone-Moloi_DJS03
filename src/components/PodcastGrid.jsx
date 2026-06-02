import PodcastPreviewCard from "./PodcastPreviewCard.jsx";

/**
 * Renders a responsive grid of podcast previews.
 * @param {object} props - Component props.
 * @param {object[]} props.podcasts - Podcast records to render.
 * @returns {JSX.Element} Podcast preview grid.
 */
export default function PodcastGrid({ podcasts }) {
  return (
    <section className="podcast-grid" aria-label="Podcast previews">
      {podcasts.map((podcast) => (
        <PodcastPreviewCard key={podcast.id} podcast={podcast} />
      ))}
    </section>
  );
}
