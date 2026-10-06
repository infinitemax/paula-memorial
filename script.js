/*
  This file turns the music array in content.js into the
  music list on the page. You normally won't need to edit it.
*/

const musicList = document.querySelector("#music-list");

music.forEach((song) => {
  const article = document.createElement("article");
  article.className = "music-item";

  article.innerHTML = `
    <div>
      <h3>${escapeHtml(song.title)}</h3>
      <p>${escapeHtml(song.artist)}</p>
      ${song.note ? `<p class="music-meta">${escapeHtml(song.note)}</p>` : ""}
    </div>
    <a class="listen" href="${escapeAttribute(song.url)}" target="_blank" rel="noopener noreferrer">
      Listen
    </a>
  `;

  musicList.appendChild(article);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
