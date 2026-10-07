const musicList = document.querySelector("#music-list");

music.forEach((song) => {
  const article = document.createElement("article");
  article.className = "music-item";

  const youtubeId = getYouTubeVideoId(song.url);

  article.innerHTML = `
    <div class="music-info">
      <h3>${escapeHtml(song.title)}</h3>
      <p>${escapeHtml(song.artist)}</p>
      ${song.note ? `<p class="music-meta">${escapeHtml(song.note)}</p>` : ""}
    </div>

    ${youtubeId
      ? `
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
        `
      : `
          <a
            class="listen"
            href="${escapeAttribute(song.url)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen
          </a>
        `
    }
  `;

  musicList.appendChild(article);

  // Add behaviour to YouTube Listen button
  if (youtubeId) {
    const button = article.querySelector(".youtube-listen");
    const player = article.querySelector(".youtube-player");

    button.addEventListener("click", () => {
      const isHidden = player.hidden;

      player.hidden = !isHidden;
      button.textContent = isHidden ? "Hide player" : "Listen";
    });
  }
});


function getYouTubeVideoId(url) {
  try {
    const parsed = new URL(url);

    // Short YouTube URL:
    // https://youtu.be/hdjL8WXjlGI
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }

    // Normal YouTube URL:
    // https://www.youtube.com/watch?v=hdjL8WXjlGI
    if (
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "www.youtube.com"
    ) {
      return parsed.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}


const poemsList = document.querySelector("#poems-list");

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


function formatPoem(text) {
  return escapeHtml(text)
    .split("\n\n")
    .map((stanza) => `<p>${stanza.replaceAll("\n", "<br>")}</p>`)
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