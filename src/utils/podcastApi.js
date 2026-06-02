const PODCAST_API_URL = "https://podcast-api.netlify.app/";

/**
 * Fetches podcast preview data from the external API.
 * @returns {Promise<object[]>} Podcast preview records.
 * @throws {Error} When the API request fails or returns invalid data.
 */
export async function fetchPodcasts() {
  const response = await fetch(PODCAST_API_URL);

  if (!response.ok) {
    throw new Error("Unable to load podcasts. Please try again later.");
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Podcast data could not be read.");
  }

  return data;
}
