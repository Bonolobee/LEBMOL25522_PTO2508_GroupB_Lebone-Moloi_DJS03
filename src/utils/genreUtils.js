import { genres } from "../data.js";

/**
 * Resolves podcast genre ids into display names.
 * @param {number[]} genreIds - Genre ids from a podcast record.
 * @returns {string[]} Genre display names.
 */
export function getGenreNames(genreIds = []) {
  return genreIds
    .map((id) => genres.find((genre) => genre.id === id)?.title)
    .filter(Boolean);
}
