# Memorial website

A small static memorial site designed to be hosted with GitHub Pages.

## Files

- `index.html` — page structure and the main written content
- `styles.css` — all visual styling
- `content.js` — structured content, currently the music list
- `script.js` — generates the music list from `content.js`

## Adding music

Open `content.js` and add an object to the `music` array:

```js
{
  title: "Song title",
  artist: "Artist",
  note: "A short explanation of why she chose it.",
  url: "https://..."
}
```

The order of the objects determines the order in which songs appear.

At this stage the site uses external links rather than hosting audio files. This works particularly well for YouTube, Spotify, SoundCloud, Bandcamp, etc., and avoids having to host copyrighted recordings.

## Hosting on GitHub Pages

1. Create a new GitHub repository.
2. Upload these four files (and this README if wanted).
3. In the repository, go to Settings → Pages.
4. Select the main branch as the source.
5. GitHub will provide the site address.

You can later connect a custom domain if desired.

## Design philosophy

The design deliberately avoids traditional memorial typography and visual clichés. It uses a restrained sans-serif system font, generous spacing, a muted neutral background and simple typography.

The structure can be changed freely as the project develops.
