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
    <main className="app-shell">
      <h1>Podcast Discovery</h1>
      {status === "loading" && <p className="state-message">Loading podcasts...</p>}
      {status === "error" && <p className="state-message state-message--error">{errorMessage}</p>}
      {status === "empty" && <p className="state-message">No podcasts are available right now.</p>}
      {status === "success" && <PodcastGrid podcasts={podcasts} />}
    </main>
  );
}
