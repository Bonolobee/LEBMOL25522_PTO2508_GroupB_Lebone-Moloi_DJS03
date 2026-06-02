import { useEffect, useMemo, useRef, useState } from "react";
import PodcastGrid from "./components/PodcastGrid.jsx";
import { fallbackPodcasts } from "./data.js";
import { fetchPodcastsWithFallback } from "./utils/podcastApi.js";

/**
 * Root component for the DJS03 podcast landing page.
 * @returns {JSX.Element} Landing page shell.
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const visiblePodcasts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return podcasts;

    return podcasts.filter((podcast) =>
      [podcast.title, podcast.description]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [podcasts, searchTerm]);

  useEffect(() => {
    let ignoreResult = false;

    async function loadPodcasts() {
      try {
        setStatus("loading");
        setErrorMessage("");
        const result = await fetchPodcastsWithFallback(fallbackPodcasts);

        if (!ignoreResult) {
          setPodcasts(result.podcasts);
          setErrorMessage(result.message);
          setStatus(result.podcasts.length > 0 ? "success" : "empty");
        }
      } catch (error) {
        if (!ignoreResult) {
          setErrorMessage(error instanceof Error ? error.message : String(error));
          setStatus("error");
        }
      }
    }

    loadPodcasts();

    return () => {
      ignoreResult = true;
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="PodcastApp home">
          <span className="brand__icon" aria-hidden="true">P</span>
          <span>PodcastApp</span>
        </a>
        <nav className="header-actions" aria-label="Header actions">
          <button
            className="icon-button"
            type="button"
            aria-label="Focus podcast search"
            onClick={() => searchInputRef.current?.focus()}
          >
            &#128269;
          </button>
          <span className="avatar-button" aria-label="Learner initials">LM</span>
        </nav>
      </header>

      <main className="app-shell">
        <section className="hero">
          <p className="eyebrow">React podcast discovery</p>
          <h1>Find your next podcast obsession</h1>
          <p className="hero__copy">
            Browse a live collection of podcasts fetched from the API and scan titles, seasons, genres, and recent updates at a glance.
          </p>
        </section>

        <section className="toolbar" aria-label="Podcast search">
          <label className="search-label" htmlFor="podcastSearch">Search podcasts</label>
          <input
            ref={searchInputRef}
            id="podcastSearch"
            className="search-input"
            type="search"
            placeholder="Search by title or description"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </section>

        {status === "loading" && <p className="state-message">Loading podcasts...</p>}
        {errorMessage && status !== "error" && (
          <p className="state-message state-message--warning">{errorMessage}</p>
        )}
        {status === "error" && <p className="state-message state-message--error">{errorMessage}</p>}
        {status === "empty" && <p className="state-message">No podcasts are available right now.</p>}
        {status === "success" && (
          <>
            <p className="result-summary" aria-live="polite">
              Showing {visiblePodcasts.length} of {podcasts.length} podcast
              {podcasts.length === 1 ? "" : "s"}
            </p>
            {visiblePodcasts.length > 0 ? (
              <PodcastGrid podcasts={visiblePodcasts} />
            ) : (
              <p className="state-message">No podcasts match your search.</p>
            )}
          </>
        )}
      </main>
    </>
  );
}
