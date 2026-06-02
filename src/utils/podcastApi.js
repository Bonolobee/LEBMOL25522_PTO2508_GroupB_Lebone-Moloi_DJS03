const PODCAST_API_URL = "https://podcast-api.netlify.app/";

/**
 * Fetches podcast preview data from the external API.
 * @returns {Promise<object[]>} Podcast preview records.
 * @throws {Error} When the API request fails or returns invalid data.
 */
export async function fetchPodcasts() {
  let response;

  try {
    response = await fetch(PODCAST_API_URL, { cache: "no-store" });
  } catch (error) {
    throw new Error("Unable to load podcasts. Please check your network connection and try again.");
  }

  if (!response.ok) {
    throw new Error("Unable to load podcasts. Please try again later.");
  }

  let data;
  try {
    data = await response.json();
  } catch (error) {
    throw new Error("Podcast data could not be read.");
  }

  if (!Array.isArray(data)) {
    throw new Error("Podcast data could not be read.");
  }

  return data;
}

/**
 * Fetches podcast previews and falls back to local data if the live API fails.
 * @param {object[]} fallbackData - Local podcast records to use when fetch fails.
 * @returns {Promise<{podcasts: object[], source: "api" | "fallback", message: string}>}
 */
export async function fetchPodcastsWithFallback(fallbackData = []) {
  try {
    const podcasts = await fetchPodcasts();
    return { podcasts, source: "api", message: "" };
  } catch (error) {
    return {
      podcasts: fallbackData,
      source: "fallback",
      message:
        error instanceof Error
          ? `${error.message} Showing saved podcast previews instead.`
          : "Unable to load podcasts. Showing saved podcast previews instead.",
    };
  }
}
