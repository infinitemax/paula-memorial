/*
  CONTENT FILE
  --------------------------------------------------
  This is the main place to add/change music.

  Add a new object to the "music" array. For example:

  {
    title: "Song title",
    artist: "Artist",
    note: "Why she chose this song.",
    url: "https://www.youtube.com/watch?v=..."
  }

  You can reorder songs simply by moving the objects up/down.

  If you eventually want a song to appear in a particular
  part of the page, rather than in this central list, you
  can move it into the HTML and copy the markup generated
  by script.js. There is no need to commit to that now.
*/

const music = [
  {
    title: "Star Trek - original theme",
    artist: "James T Kirk",
    note: "[Stuff to say about the song]",
    url: "https://youtu.be/hdjL8WXjlGI?si=u9KDbS6e5r3ehnHI"
  },

  {
    title: "Wipeout",
    artist: "The Surfaris",
    note: "Paula loved surfing",
    url: "https://www.youtube.com/watch?v=dBURLdhmmZ8"
  },

  {
    title: "Another song",
    artist: "Who by?",
    note: "Random - try spotify",
    url: "https://open.spotify.com/"
  }
];
/*
  You can add other structured content here later if useful:
  quotations, photographs, links, dates, etc.
*/

const poems = [
  {
    title: "Warning",
    author: "Jenny Joseph",
    text: `When I am an old woman I shall wear purple
With a Red Hat which doesn't go, and doesn't suit me.
And I shall spend my pension on brandy and summer gloves
And satin sandals. And say we've no money for butter.
I shall sit down on the pavement when I'm tired
And gobble up samples in shops and press alarm bells
And run my stick along the public railings
And make up for the sobriety of my youth.
I shall go out in my slippers in the rain
And pick the flowers in other people's gardens
And learn to spit.

You can wear terrible shirts and grow more fat
And eat three pounds of sausages at a go
Or only bread and pickle for a week
And hoard pens and pencils and beer mats
and things in boxes.

But now we must have clothes that keep us dry
And pay our rent and not swear in the street
And to set a good example for the children.
We must have friends to dinner and read the papers.
But maybe I ought to practise a little now?
So people who know me are not too shocked and surprised
When suddenly I am old, and start to wear purple.`,
    backstory: `Won my first gold medal for speech and drama in Castleconnell with a
recitation of this, so links me to Dad’s family, and my mother’s side
through her determination that I have the ability to do this, the words
were amusing at the time but now prophetic and speak of/for me`
  },


  {
    title: "title 2",
    author: "author 2",
    text: `Your second poem goes here.

You can have as many
lines and stanzas
as you like.`
  }
];