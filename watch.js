// ============================================================
// WATCH PAGE LOGIC
// Reads ?id= from URL, finds the movie, loads trailer.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");

  const movie = MOVIES.find((m) => m.id === movieId);

  const frame = document.getElementById("trailer-frame");
  const titleEl = document.getElementById("watch-title");
  const metaEl = document.getElementById("watch-meta");
  const descEl = document.getElementById("watch-desc");

  if (movie) {
    // Set trailer
    frame.src = movie.trailer;

    // Set title
    titleEl.textContent = movie.title;

    // Set meta
    metaEl.innerHTML = `
      <span class="text-green-400 font-bold">${Math.floor(Math.random() * 30 + 70)}% Match</span>
      <span>${movie.year}</span>
      <span class="border border-white/40 px-1.5 text-xs">${movie.rating}</span>
      <span>${movie.duration}</span>
      <span>${movie.genres.join(" • ")}</span>
    `;

    // Set description
    descEl.textContent = movie.description;

    // Update document title
    document.title = `Netflix — ${movie.title}`;
  } else {
    // Fallback if movie not found
    frame.src = "";
    titleEl.textContent = "Movie not found";
    descEl.textContent = "The movie you are looking for does not exist.";
  }
});