const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

/**
 * Formats an ISO date as a human-readable relative date.
 * @param {string} dateString - ISO date string.
 * @returns {string} Relative updated date.
 */
export function formatUpdatedDate(dateString) {
  const date = new Date(dateString);
  const difference = Date.now() - date.getTime();

  if (Number.isNaN(date.getTime())) return "Updated date unavailable";
  if (difference < MINUTE) return "Updated just now";
  if (difference < HOUR) return `Updated ${Math.floor(difference / MINUTE)} minutes ago`;
  if (difference < DAY) return `Updated ${Math.floor(difference / HOUR)} hours ago`;

  const days = Math.floor(difference / DAY);
  if (days < 30) return `Updated ${days} day${days === 1 ? "" : "s"} ago`;

  return `Updated ${date.toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
}
