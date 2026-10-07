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
    backstory: `Won my first gold medal for speech and drama in Castleconnell with a recitation of this, so links me to Dad’s family, and my mother’s side through her determination that I have the ability to do this, the words were amusing at the time but now prophetic and speak of/for me`
  },
  {
    title: "Gaudy Nights",
    author: "Dorothy L Sayers",
    text: `
    Chapter 1

<i>Thou blind man’s mark, thou fool’s self-chosen snare,
Fond fancy’s scum, and dreg’s of scattered thought,
Band of all evils, cradle of causeless care,
Thou web of will, whose end is never wrought
Desire! Desire! I have too dearly bought
With price of mangled mind, thy worthless ware</i>
- SIR PHILIP SIDNEY

Harriet Vane sat at her writing-table and stared out into Mecklenburg Square. The late tulips made a brave show in the Square garden, and a quartet of early tennis-players were energetically calling the score of a rather erratic and unpractised game. But Harriet saw neither tulips nor tennis-players. A letter lay open on the blotting-pad before her, but its image had faded from her mind to make way for another picture. She saw a stone quadrangle, built by a modern architect in a style neither new nor old, but stretching out reconciling hands to past and present. Folded within its walls lay a trim grass plot, with flower-beds splashed at the angles, and surrounded by a wide stone plinth. Behind the level roofs of Cotswold slate rose the brick chimneys of an older and less formal pile of buildings--a quadrangle also of a kind, but still keeping a domestic remembrance of the original Victorian dwelling-houses that had sheltered the first shy students of Shrewsbury College. In front were the trees of Jowett Walk and, beyond them, a jumble of ancient gables and the tower of New College, with its jackdaws wheeling against a windy sky.

Memory peopled the quad with moving figures. Students sauntering in pairs. Students dashing to lectures, their gowns hitched hurriedly over light summer frocks, the wind jerking their flat caps into the absurd likeness of so many jesters&#39; cockscombs. Bicycles stacked in the porter&#39;s lodge, their carriers piled with books and gowns twisted about their handlebars. A grizzled woman don crossing the turf with vague eyes, her thoughts riveted upon aspects of sixteenth-century philosophy, her sleeves floating, her shoulders cocked to the academic angle that automatically compensated the backward drag of the pleated poplin. Two male commoners in search of a coach, bareheaded, hands in their trousers-pockets, talking loudly about boats. The Warden-grey and stately--and the Dean--stocky, brisk, bird-like, a Lesser Redpoll—in animated conference under the archway leading to the Old Quadrangle. Tall spikes of delphinium against the grey, quiveringly blue-like flames, if flame were ever so blue. The college cat, preoccupied and remote, stalking with tail erect in the direction of the buttery.

It was all so long ago; so closely encompassed and complete; so cut off as by swords from the bitter years that lay between. Could one face it now? What would those  women say to her, to Harriet Vane, who had taken her First in English and gone to London to write mystery fiction, to live with a man who was not married to her, and to be tried for his murder amid a roar of notoriety? That was not the kind of career that Shrewsbury expected of its old students.`,
    backstory: ``
  },
  {
    title: "Psalm 62",
    text: `O God, you are my God, for you I long;
for you my soul is thirsting.
My body pines for you
like a dry, weary land without water.
So I gaze on you in the sanctuary
to see your strength and your glory.

For your love is better than life,
my lips will speak your praise.
So I will bless you all my life,
in your name, I will lift up my hands.
My soul shall be filled as with a banquet,
my mouth shall praise you with joy.

On my bed I remember you.
On you I muse through the night
for you have been my help;
in the shadow of your wings I rejoice.
My soul clings to you;
your right hand holds me fast.`,
    backstory: `As spoken about in memoire. I’d like to emphasise the beauty of the language which transports me and reminds me of the thin line that we interpret in different ways…`
  }
];