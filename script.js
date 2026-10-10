
const musicList = document.querySelector("#music-list");

function createSongElement(song) {
  const article = document.createElement("article");
  article.className = "music-item";

  const youtubeId = getYouTubeVideoId(song.url);

  article.innerHTML = `
    <div class="music-info">
      <h4>${escapeHtml(song.title)}</h4>
      <p>${escapeHtml(song.artist)}</p>
${song.note ? `<div class="music-meta">${formatText(song.note)}</div>` : ""}
    </div>

    ${youtubeId ? `
      <button class="listen youtube-listen" type="button">
        Listen
      </button>
      <div class="youtube-player" hidden>
        <iframe
          src="https://www.youtube.com/embed/${youtubeId}"
          referrerpolicy="strict-origin-when-cross-origin"
          title="${escapeHtml(song.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    ` : `
      <a class="listen"
         href="${escapeAttribute(song.url)}"
         target="_blank"
         rel="noopener noreferrer">Listen</a>
    `}
  `;

  if (youtubeId) {
    const button = article.querySelector(".youtube-listen");
    const player = article.querySelector(".youtube-player");

    button.addEventListener("click", () => {
      const isHidden = player.hidden;
      player.hidden = !isHidden;
      button.textContent = isHidden ? "Hide player" : "Listen";
    });
  }

  return article;
}

if (musicList) {
  musicCategories.forEach((category) => {
    const categorySongs = music.filter(
      (song) => song.category === category.id
    );

    if (categorySongs.length === 0) return;

    const categorySection = document.createElement("section");
    categorySection.className = "music-category";

    categorySection.innerHTML = `
    <h3 class="music-category-heading">
      ${escapeHtml(category.title)}
    </h3>
    ${category.description
        ? `<p class="music-category-description">
           ${escapeHtml(category.description)}
         </p>`
        : ""}
  `;

    // Categories without subcategories work as before.
    if (!category.subcategories?.length) {
      const categoryList = document.createElement("div");
      categoryList.className = "music-category-list";

      categorySongs.forEach((song) => {
        categoryList.appendChild(createSongElement(song));
      });

      categorySection.appendChild(categoryList);
    } else {
      // Render each subcategory and its songs.
      category.subcategories.forEach((subcategory) => {
        const subcategorySongs = categorySongs.filter(
          (song) => song.subcategory === subcategory.id
        );

        if (subcategorySongs.length === 0) return;

        const subcategorySection = document.createElement("div");
        subcategorySection.className = "music-subcategory";

        subcategorySection.innerHTML = `
        <h4 class="music-subcategory-heading">
          ${escapeHtml(subcategory.title)}
        </h4>
        ${subcategory.description
            ? `<p class="music-subcategory-description">
               ${escapeHtml(subcategory.description)}
             </p>`
            : ""}
      `;

        const subcategoryList = document.createElement("div");
        subcategoryList.className = "music-category-list";

        subcategorySongs.forEach((song) => {
          subcategoryList.appendChild(createSongElement(song));
        });

        subcategorySection.appendChild(subcategoryList);
        categorySection.appendChild(subcategorySection);
      });
    }

    musicList.appendChild(categorySection);
  });
}


function getYouTubeVideoId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }

    if (
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "m.youtube.com"
    ) {
      return parsed.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}


const poemsList = document.querySelector("#poems-list");

if (poemsList) {
  poems.forEach((poem) => {
    const article = document.createElement("article");
    article.className = "poem";

    article.innerHTML = `
    <div class="poem-main">
      <h3>${escapeHtml(poem.title)}</h3>

      <div class="poem-text">
        ${formatPoem(poem.text)}
      </div>

      ${poem.author
        ? `<p class="byline">— ${escapeHtml(poem.author)}</p>`
        : ""
      }
    </div>

    ${poem.backstory
        ? `
          <div class="poem-backstory">
            <h3>Backstory</h3>
            <div class="backstory-text">
              ${formatPoem(poem.backstory)}
            </div>
          </div>
        `
        : ""
      }
  `;

    poemsList.appendChild(article);
  });
}


function formatPoem(text) {
  return escapeHtml(text)
    .split("\n\n")
    .map((stanza) => `<p>${stanza.replaceAll("\n", "<br>")}</p>`)
    .join("");
}

function formatText(text) {
  return escapeHtml(text)
    .split(/\n\s*\n/)
    .map((paragraph) => `<p>${paragraph.replaceAll("\n", "<br>")}</p>`)
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("&lt;i&gt;", "<i>")
    .replaceAll("&lt;/i&gt;", "</i>")
    .replaceAll("&lt;em&gt;", "<em>")
    .replaceAll("&lt;/em&gt;", "</em>")
    .replaceAll("&lt;strong&gt;", "<strong>")
    .replaceAll("&lt;/strong&gt;", "</strong>");
}


function escapeAttribute(value) {
  return escapeHtml(value);
}