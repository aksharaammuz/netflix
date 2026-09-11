// ============================================================
// UI HELPERS
// ============================================================

function fallbackPoster(id) {
  return `https://picsum.photos/seed/${id}/300/450`;
}

/**
 * Create a movie card element.
 */
function createMovieCard(movie, rank = null) {
  const card = document.createElement("a");
  card.href = `watch.html?id=${movie.id}`;
  
  if (rank) {
    // TOP 10 CARD LAYOUT
    card.className = "movie-card-top10 group relative flex-shrink-0 flex items-end cursor-pointer";
    card.innerHTML = `
      <div class="top-10-number">${rank}</div>
      <div class="relative w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] rounded-md overflow-hidden bg-white/5 transition-transform duration-300">
        <img
          src="${movie.poster}"
          alt="${movie.title}"
          onerror="this.onerror=null;this.src='${fallbackPoster(movie.id)}';"
          class="w-full h-[210px] sm:h-[240px] md:h-[270px] lg:h-[300px] object-cover"
          loading="lazy"
        />
        <!-- Hover Overlay for Top 10 -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <p class="text-xs font-semibold text-white truncate">${movie.title}</p>
          <div class="flex items-center gap-1.5 mt-1 text-[10px]">
            <span class="text-green-400 font-bold">${Math.floor(Math.random() * 30 + 70)}% Match</span>
            <span class="text-white/60 border border-white/40 px-1 rounded text-[8px]">${movie.rating}</span>
          </div>
        </div>
      </div>
    `;
  } else {
    // STANDARD CARD LAYOUT
    // Notice the "group" class is ONLY on the card, not the row.
    card.className = "movie-card group relative flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] rounded-md overflow-hidden cursor-pointer bg-white/5";
    card.innerHTML = `
      <img
        src="${movie.poster}"
        alt="${movie.title}"
        onerror="this.onerror=null;this.src='${fallbackPoster(movie.id)}';"
        class="w-full h-[210px] sm:h-[240px] md:h-[270px] lg:h-[300px] object-cover"
        loading="lazy"
      />
      <!-- Hover Overlay for Standard -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <p class="text-xs font-semibold text-white truncate">${movie.title}</p>
        <div class="flex items-center gap-1.5 mt-1 text-[10px]">
          <span class="text-green-400 font-bold">${Math.floor(Math.random() * 30 + 70)}% Match</span>
          <span class="text-white/60 border border-white/40 px-1 rounded text-[8px]">${movie.rating}</span>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <span class="w-6 h-6 rounded-full bg-white text-black grid place-items-center text-[10px] font-bold">&#9654;</span>
          <span class="w-6 h-6 rounded-full border border-white/50 grid place-items-center text-[10px]">+</span>
        </div>
      </div>
    `;
  }

  return card;
}

/**
 * Create a full movie row section with scroll arrows.
 */
function createRow(title, movies, isTop10 = false) {
  const section = document.createElement("section");
  section.className = "mb-8 md:mb-12 px-4 md:px-12";

  const header = document.createElement("h2");
  header.className = "text-lg md:text-xl font-semibold mb-3 text-white/90";
  header.textContent = title;

  // Container for the arrows + scrolling area
  // Removed "group" from here so it doesn't trigger hover on the whole row.
  const relativeContainer = document.createElement("div");
  relativeContainer.className = "row-container relative";

  // Left Arrow
  const leftBtn = document.createElement("button");
  leftBtn.className = "row-slider-btn slider-left";
  leftBtn.innerHTML = "&#10094;"; 
  
  // Right Arrow
  const rightBtn = document.createElement("button");
  rightBtn.className = "row-slider-btn slider-right";
  rightBtn.innerHTML = "&#10095;"; 

  const scrollContainer = document.createElement("div");
  scrollContainer.className = "flex gap-3 overflow-x-auto no-scrollbar pb-4 scroll-smooth";

  movies.forEach((movie, index) => {
    if (isTop10) {
      scrollContainer.appendChild(createMovieCard(movie, index + 1));
    } else {
      scrollContainer.appendChild(createMovieCard(movie));
    }
  });

  // --- SLIDING LOGIC ---
  const scrollAmount = scrollContainer.clientWidth - 150; // Scroll slightly less than full width

  leftBtn.onclick = () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  rightBtn.onclick = () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Function to check scroll position and hide/show arrows
  const checkArrows = () => {
    // Hide left arrow if at the very start
    if (scrollContainer.scrollLeft > 10) {
      leftBtn.style.opacity = '1';
      leftBtn.style.pointerEvents = 'auto';
    } else {
      leftBtn.style.opacity = '0';
      leftBtn.style.pointerEvents = 'none';
    }

    // Hide right arrow if at the very end
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
      rightBtn.style.opacity = '0';
      rightBtn.style.pointerEvents = 'none';
    } else {
      rightBtn.style.opacity = '1';
      rightBtn.style.pointerEvents = 'auto';
    }
  };

  // Listen for scroll events to update arrow visibility
  scrollContainer.addEventListener('scroll', checkArrows);
  
  // Initial check (with slight delay to ensure DOM is rendered)
  setTimeout(checkArrows, 100);

  relativeContainer.appendChild(leftBtn);
  relativeContainer.appendChild(scrollContainer);
  relativeContainer.appendChild(rightBtn);

  section.appendChild(header);
  section.appendChild(relativeContainer);
  return section;
}