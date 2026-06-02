import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid.jsx";
import { fetchPodcasts } from "./utils/podcastApi.js";

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
        const podcastData = await fetchPodcasts();

        if (!ignoreResult) {
          setPodcasts(podcastData);
          setStatus(podcastData.length > 0 ? "success" : "empty");
        }
      } catch (error) {
        if (!ignoreResult) {
          setErrorMessage(error.message);
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
          <button className="icon-button" type="button" aria-label="Search podcasts">&#128269;</button>
          <button className="avatar-button" type="button" aria-label="User profile">LM</button>
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

        {status === "loading" && <p className="state-message">Loading podcasts...</p>}
        {status === "error" && <p className="state-message state-message--error">{errorMessage}</p>}
        {status === "empty" && <p className="state-message">No podcasts are available right now.</p>}
        {status === "success" && <PodcastGrid podcasts={podcasts} />}
      </main>
    </>
  );
}
