import { useEffect, useState } from "react";
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
        <a className="brand" href="/" aria-label="Podcast App home">
          <span className="brand__icon" aria-hidden="true">P</span>
          <span>Podcast App</span>
        </a>
      </header>

      <main className="app-shell">
        {status === "loading" && <p className="state-message">Loading podcasts...</p>}
        {status === "error" && <p className="state-message state-message--error">{errorMessage}</p>}
        {status === "success" && <PodcastGrid podcasts={podcasts} />}
      </main>
    </>
  );
}
