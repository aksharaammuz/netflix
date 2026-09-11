// ============================================================
// HOME PAGE LOGIC
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // ---------- HERO SECTION ----------
  const featured = MOVIES[0]; 

  const heroBackdrop = document.getElementById("hero-backdrop");
  const heroTitle = document.getElementById("hero-title");
  const heroMeta = document.getElementById("hero-meta");
  const heroDesc = document.getElementById("hero-desc");
  const heroPlay = document.getElementById("hero-play");
  const heroInfo = document.getElementById("hero-info");

  if (featured) {
    heroBackdrop.src = featured.backdrop;
    heroBackdrop.alt = featured.title;
    heroTitle.textContent = featured.title;
    heroDesc.textContent = featured.description;

    heroMeta.innerHTML = `
      <span class="text-green-400 font-bold">${Math.floor(Math.random() * 30 + 70)}% Match</span>
      <span>${featured.year}</span>
      <span class="border border-white/40 px-1.5 text-xs">${featured.rating}</span>
      <span>${featured.duration}</span>
      <span class="hidden sm:inline">${featured.genres.join(" • ")}</span>
    `;

    heroPlay.href = `watch.html?id=${featured.id}`;
    heroInfo.addEventListener("click", () => {
      window.location.href = `watch.html?id=${featured.id}`;
    });
  }

  // ---------- MOVIE ROWS ----------
  const rowsContainer = document.getElementById("rows");

  ROWS.forEach((row) => {
    const rowMovies = row.ids
      .map((id) => MOVIES.find((m) => m.id === id))
      .filter(Boolean);

    if (rowMovies.length > 0) {
      // Pass row.isTop10 to createRow so it knows to render numbers
      rowsContainer.appendChild(createRow(row.title, rowMovies, row.isTop10));
    }
  });

  // ---------- NAVBAR SCROLL EFFECT ----------
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});