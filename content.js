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

const musicCategories = [
  {
    id: 1,
    title: "Music from my childhood and youth",
    description: "These are a small number of songs and music that call to mind growing up in Limerick and taking my first steps away. Inevitably they’re slightly eclectic! Some of them resonant with later experiences…"
  },
  {
    id: 2,
    title: "Family",
    description: "Songs to remember my family by…"
  },
  {
    id: 3,
    title: "Classical music",
    description: "I’m not a very knowledgeable or widely listened classical music person, but there are a small number of pieces that I return to again and again and enjoy. The enjoyment stems from the calming and soothing effect the music has on my soul …"
  },
  {
    id: 4,
    title: "Did I mention I love Eurovision?",
    description: "I love Eurovision. Yes I know it’s tacky and in recent years has lost some of its lustre and the politicking is more ominous but I treasure the times that it gave Ireland a world stage (before we sent the rapping turkey to represent us!). On compiling my favourite songs, I realised there is a certain bouncy quality shared between many of them! Enjoy!"
  },
  {
    id: 5,
    title: "Science Fiction Tracks"
  },
  {
    id: 6,
    title: "Songs and music that I like and make me happy!",
    description: "Sometimes I just come across songs that resonate with me. It can be because of the lyrics, the music, the context or none of the above. I’ve noticed in compiling them that the voices tend to be female, the lyrics strong and demanding and the music has an underlying thumping quality. Enjoy!"
  },
  {
    id: 7,
    title: "Love and Sarah",
    subcategories: [
      {
        id: "1",
        title: "Songs that mark our love story",
        description: ""
      },
      {
        id: "2",
        title: "More raunchy songs that mark our love story. You have been warned!",
        description: ""
      },
      {
        id: "3",
        title: "Songs that speak to our love story",
        description: ""
      }]
  }
];



const music = [
  {
    title: "Dancing Queen",
    artist: "Abba",
    note: "Music of my teenage years resurrected as celebration a few years later: I had just been elected President of the Irish History Students’ Association at its annual conference in Mullingar, Co Westmeath, February 1990. I hit the floor at the disco after the AGM surprising myself and others at the enthusiastic nature [code for rubbish but full on!] of my dancing…",
    url: "https://www.youtube.com/watch?v=xFrGuyw1V8s",
    category: 1
  },
  {
    title: "One Way or Another",
    artist: "Debbie Harry",
    note: "Thankfully skipped the Bay City Rollers in my teens (the tartan army!) and loved Blondie! An early teenage music crush – I just loved the way it caught me up in things I hadn’t even started to imagine!!",
    url: "https://youtu.be/_zBwRDEFMRY?si=Nia81xWAlNn_pth_",
    category: 1
  },
  {
    title: "Stay",
    artist: "Shakespears Sister",
    note: "Despite the incorrectly spelled band name(!) a memory of a late teenage song I loved with an Irish foundation and one of the few overlaps in musical taste with my sister Liza who channelled Siobhan Fahey’s look and vibe.",
    url: "https://www.youtube.com/watch?v=YCYaALgW80c",
    category: 1
  },
  {
    title: "I Dreamt I Dwelt in Marble Halls",
    artist: "Joan Sunderland",
    note: "My <i>mother’s</i> favourite piece of music. When she was lost to dementia in her nursing home, I’d put this on and every time at the exact same point in the song, she’d close her eyes, lift her hand, start conducting (remarking on the beauty of the voice), sigh deeply and join in. She’d relax utterly having found her sublime.",
    url: "https://youtu.be/yebOy5Ne6bQ?si=GGHiBq6GrM9ze4NU",
    category: 2
  },
  {
    title: "The Walls of Limerick",
    artist: "Traditional",
    note: `For my <i>Dad</i>. He loved diddly-di music of all kinds and I know that he wished he could play more – he could play the concertina by ear. I’ve chosen this piece not necessarily because it was his favourite but rather because it epitomises all of the ceidhli music we hummed and beat rhythm to over the years. The title gives something away too!`,
    url: "https://youtu.be/4puxon__85M?si=YcxG3UWslxI46goY",
    category: 2
  },
  {
    title: "Liza Song 1",
    artist: "Liza Coonerty",
    note: "For <i>Liza</i>. At the time of her death, Liza was singing jazz and jazz adjacent music [semi] professionally, grafting away on the local scene. She’s have probably built up enough of a reputation to make her living. She loved performing and I think she’d like that her music lingers on. When she died, Mam and I put “your song will live forever in our hearts” on her memorial card. As our hearts are stilled, this echo of her songbook will have to suffice.",
    url: "",
    category: 2
  },
  {
    title: "Liza Song 2",
    artist: "Liza Coonerty",
    note: "We will need to add this.",
    url: "",
    category: 2
  },
  {
    title: "The Long Song",
    artist: "Dr Who",
    note: "For <i>Daisy</i> - we have Dr Who in common, agree on some commonalities, disagree on others on the show but love the thing - a bit like our relationship! I hope your long song transcends, warrior.",
    url: "https://youtu.be/WyYmxDxSZ4A?si=0-CwndSkjjnm8GWT",
    category: 2
  },
  {
    title: "Everything is AWESOME",
    artist: "Tegan and Sara",
    note: "For <i>Gabe</i>: Being a Granny makes me a different person, being Gabriel’s Granny completes the family Sarah has enfolded me in. Gabriel, everything isn’t awesome all the time, but much is it is and enough of it is because of the love of your Fam. Use it, enjoy it and I’ll miss being part of it but remember I will always love you. Live your dreams…",
    url: "https://www.youtube.com/watch?v=StTqXEQ2l-Y",
    category: 2
  },
  {
    title: "My Wife is on a Diet",
    artist: "Leslie Sarony and Harry Hudson and his Melody Men",
    note: "For <i>Rose</i> as we share a desire for lovely gourmet food and experimentation (thanks for the caviar!) and would be as crestfallen as this poor man from my favourite era (1920s). I love your enthusiasm Rose, your ability to take the mundane and infuse it with joy and then sprinkle an extra layer of infectious happiness on top. Thank you!",
    url: "https://youtu.be/f2h2fPwcopo?si=4rbhsSW_-kAMYT4B",
    category: 2
  },
  {
    title: "Baidin Fheilimi",
    artist: "Sinead O’Connor",
    note: "For <i>Annie and Max</i>, as this fits the country pub music session vibe you both love. All Irish school children learned to sing Baidin Fheilimi at some stage, so I include it to remember my singing Irish songs in classrooms across many years. Sinead singing it in Sean Nos style (literally “old style”) adds extra pathos and a strange type of authenticity- I like it for the quality of her voice and feel sad for her life’s search for meaning.  It’s about Phelim’s little, lively, charming boat and Phelim sailing it to various ports and bays in Donegal to catch fish. It also carries the ghostly overlay of a 17th century Irish chieftain, escaping his enemies in his straight, willing and tiny boat.",
    url: "https://youtu.be/3ecK0dkBUTc?si=giYfR62AYQI0GkzL",
    category: 2
  },
  {
    title: "Trucks",
    artist: "Jake Monaco",
    note: "For <i>Sarah, Gabriel and I</i>. The three of us celebrating [Disney] Cars on the road with Lightening and Mater, just wishing the journey together was longer.",
    url: "https://youtu.be/ok59hIY6SAc?si=Wg2d9kCwcsBOyj_o",
    category: 2
  },
  {
    title: "Tweaking the Nipple",
    artist: "John Brookman",
    note: "For <i>John</i> or more to the point, by John. Thank you for this ditty to mark Sarah and my civil partnership. It took a point of contention and turned it into a celebration of our love and special day. Our blended family works because we all do our bit to keep things level and loveable.",
    url: "", // TODO add link to this song
    category: 2
  },
  {
    title: "Brandenburg Concerto no1 in F BWV1046: II. Adagio",
    artist: "Johann Sebastian Bach",
    note: "Every now and again I’d put on this sophisticated calming music to think and write for my job. Then I’d get irritated and remember I like to think in silence, so I’d switch it off. As a result, I know this opening concerto very well! It also reminds me of the study hours in our front room at home in Limerick, where that need for silence infused me, sitting at the dining table having had my dinner cooked for me and the coal fire lit for the 3 hours evening school work.  This was the manifestation of my Mam’s practical determination that I would fulfil my potential (resourced by my Dad), and not only finishing secondary school unlike her and Dad but getting to University; unheard of from the likes of us according to Dad. Without my parents what would I be?",
    url: "https://youtu.be/KLO40TsdiWM?si=DdiIsWDgXKJ4O7OS",
    category: 3
  },
  {
    title: "Responsory: Favus Distillans",
    artist: "Hildegard von Bingen",
    note: "Beautiful female voices from way back when, recently rediscovered in the way that the female always has had to be. I had wonderful opportunities to make music like this both in hours of demanding practice and then in various liturgical formats, worshipping, imploring, seeking forgiveness, extolling the beauty of creation. Inevitably this reminds me of the path I tried but left. The beauty has left its mark though…",
    url: "https://youtu.be/N3sVZvdsim0?si=fmzTJp8LtTrEQR4I",
    category: 3
  },
  {
    title: "Pie Jesu",
    artist: "Sarah Brightman",
    note: "This is a piercing memory of a moment of sublime breakthrough at a liturgy I organised at the hostel I stayed in Maynooth while pursuing my undergraduate studies as a religious sister in temporary vows. I curated the music for a celebration of Mass and used this as a backdrop for a few moments of reflection following receipt of Holy Communion. The world stopped for me and by the profound silence and stillness in the room I felt the effect it had on others in the room Sublime (and proof that even the likes of Andrew Lloyd Webber can touch the underside of the sky).",
    url: "https://youtu.be/JTbs51Bs_4w?si=StrowHdjmVJAPWRE",
    category: 3
  },
  {
    title: "Theodora: As with rosy steps the morn (Handel)",
    artist: "Lorraine Hunt Liberson",
    note: "Randomly heard this on the radio and fell in love and searched it down. Then I deliberately created an indelible memory: early for a work meeting at Goldney Hall at the University, I sat in the beautiful grade listed Goldney garden on an equally beautiful morning and listened over and over again. Not many people are lucky enough to work in such surroundings and be able to create a moment of the sublime and fall into it.",
    url: "https://youtu.be/3TkNh32IY28?si=-7PG1lF-wBowNgDS",
    category: 3
  },
  {
    title: "If I Didn't Have You",
    artist: "Amanda Marshall",
    note: "'Our Song'- the one I fell in love to and we fell in love together. The opening whistle always brings me back to Southampton, that feeling of falling, falling, falling into two not one… I thought we’d have more moments, but each has been precious even when fraught.",
    url: "",
    category: 7,
    subcategory: "1"
  },
  {
    title: "Wherever You Will Go",
    artist: "Charlene Soraia",
    note: "Sarah introduced me to this and the lyrics appealed; you have run away with my heart though too sadly appropriate because we can’t go together…",
    url: "",
    category: 7,
    subcategory: "1"
  },
  {
    title: "You Do Something To Me",
    artist: "Cole Porter",
    note: "The song that is my gift to Sarah from my favourite era and composer.",
    url: "",
    category: 7,
    subcategory: "1"
  },
  {
    title: "Chain Reaction",
    artist: "Diana Ross",
    note: "Warning: sexually explicit. I have a vivid memory of sitting in Southampton the first time I felt well after my PE and pneumonia in the late 1990s and chair dancing to this over and over again. I was happy - and the memory has reminded me not to take even scraps of wellness for granted this past while. And it’s upbeat, and who refuses a double entendre like this one, eh?",
    url: "",
    category: 7,
    subcategory: "2"
  },
  {
    title: "Closer",
    artist: "Tegan and Sara",
    note: "Singing lesbian sisters! Warning: sexually explicit. Sarah in the frame again. Wish we had more time for the dreams…",
    url: "",
    category: 7,
    subcategory: "2"
  },
  {
    title: "Lunch",
    artist: "Billie Eillish",
    note: "Warning: sexually explicit. A recent discovery- I love the explicitness of the lyrics and how the lady love and lady garden can be front and centre and unapologetic. I’m jealous for those coming behind… fill your mouths with the food of love!",
    url: "",
    category: 7,
    subcategory: "2"
  },
  {
    title: "Hold My Hand",
    artist: "Jesse Glynne",
    note: "To have someone to hold your hand: normal one, bockety one, doesn’t matter to Sarah and allows me to be disabled, to be me.",
    url: "",
    category: 7,
    subcategory: "3"
  },
  {
    title: "The Island",
    artist: "Dolores Keane",
    note: "The song, the voice, the politics, in the end the personal by the universal sea.",
    url: "",
    category: 7,
    subcategory: "3"
  },
  {
    title: "Feet of a Dancer",
    artist: "Maura O’Connell",
    note: "Loved in my earlier years now the chorus carries my love and endless wishes for Sarah x",
    url: "",
    category: 7,
    subcategory: "3"
  },

];


// {    title: "",
//     artist: "",
//     note: "",
//     url: "",
//     category: 3,
//     subcategory: ""}

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
    title: `Polar City Blues`,
    text: `Hagar’s enormous sun sets in an opalescent haze, the sky brindled a metallic red-orange that seems insultingly gaudy, as if the cheap holopix director were designing an alien sky. As the red fades into an offensive little-girl pink, the real show begins above the Polar City. The northern lights crackle, hang long waves of rainbow over the skyline that resembles nothing so much as egg-cartons set on end, and at times wash the high gantries of the space-port in purple and silver. Although most of the inhabitants (just getting out of bed, checking their kids or their incubating eggs, brushing their teeth or washing their beaks) ignore them, tonight Police Corporal Baskin Ward stops on his downtown beat and leans against the blue plastocrete wall of the public library to watch the sky. He has a lot to think over, and it is very hot, as it always is in Polar City. In an hour or so, the town will come alive, but he wants to take it easy so he’ll be fit for the sergeants’ exam on the morrow. If he passes, he’ll be able to marry the women he’s loved for three years, a clerk/comp-op over in Traffic Control who wants, as he does, two children and a transfer off this god-damn low-tech desert world with the continually gaudy sky. If he does well as sergeant, he’ll be able to request posting to Sarah, his home planet, a world of rains and jungles - if, or course, he passes the exam in the first place.

The blue arc street lamps wink on, floating in their maglev field some seven metres above the pale grey sidewalks and the shiny black move-belts that flow beside them. The Civic Centre Plaza in front of him is empty except for a women hurrying across, her high heeled boots echoing and slapping on the rammed earth tiles, the sound competing with the endless snap magnetism in the sky above. In a little while, office workers and bureaucrats will pour in from the underground condos rimming the city proper. Ward hopes for an easy beat. Most likely it’ll be a few drunks and more than a few dreamdusters, all to be lectured, ticketed, and entered into the rehab computer via the terminal on his belt, while the most exciting arrest is likely to be a pick-pocket. Basically, Ward is there to be seen in his kelly-green uniform with its imposing gold braid and shiney silver stun-gun, a visible symbol of the Republic’s power to protect and punish.

He settles his cap, peels himself off the library wall, and steps on to the move-belt that runs across the plaza towards City Hall, an enormous black basalt building as glum as tombstone. In the centre of the plaza is a roughly-defined square border of holm oaks. Just as the belt carries Ward inside this square, some unseen worker far below the surface turns on the public hologram in the centre. A tall fountain snaps into being, the illusionary water spraying in dead silence for a minute before the hiss-and-splash tap goes on. When the ion generator joins in, Ward can almost believe that its cooler near the fountain. He steps off the belt and ambles over to the railing that keeps kids, lizlets, and pets out of the imaginary water. In the middle of the big white plastocrete pool, he sees his first drunk or druggie of the night, lying half-hidden in the murk of the illusion.

‘Okay, amigo, need a little help, huh?’

As Ward wades through the holo, he’s irrationally irritated that his legs stay dry and thus hot. The doper never even moves, merely waits, lying on his back with his hands folded over his chest. Then Ward sees the stain, more black than red in the arc light, spreading over the whiteness.

‘Jeezchrise!’

Ward kneels down fast, reaching over his combox. He sees that he’s kneeling with a male carli, about five feet tall, even skinnier than most of his species, the three fingers on each hand like long twigs and tufted with pale grey fur. The dark grey fur visible on his face, arms, and neck is dull and matted. His eyes are wide; the skin-flaps around each ear, fully extended and rigid; his thin slit mouth, shut tight. Since Ward knows carli wats, he realizes that these particular facial expressions indicate a certain mild surprise and nothing more. The victim must has suspected nothing, seen no danger coming, until the exact moment that someone slashed his throat open to the spine.`,
    author: `Katherine Kerr`,
    backstory: `Giving a flavour of a middle brow SF book chosen for its fast paced narrative, demand that you engage to understand what is going on and general enjoyableness.`
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
  },
  {
    title: `Surprised by Joy`,
    text: `Surprised by joy - impatient as the Wind
I turned to share the transport - Oh! with whom
But Thee, Long buried in the silent Tomb,
That spot which no vicissitude can find?
Love, faithful love, recalled thee to my mind -
But how could I forget thee? - Through what power,
Even for the least division of an hour,
Have I been so beguiled as to be blind
To my most grievous loss? - That thought’s return
Was the worst pang that sorrow ever bore,
Save one, one only, when I stood forlorn,
Knowing my heart's best treasure was no more;
That neither present time, nor years unborn
Could to my sight that heavenly face restore.`,
    author: `William Wordsworth`,
    backstory: ``
  },
  {
    title: `Atlas`,
    text: `There is a kind of love called maintenance
Which stores the WD40 and knows when to use it;

Which checks the insurance, and doesn't forget
The milkman; which remembers to plant bulbs;

Which answers letters; which knows the way
The money goes; which deals with dentists

And Road Fund Tax and meeting trains,
And postcards to the lonely; which upholds

The permanently rickety elaborate
Structures of living, which is Atlas.

And maintenance is the sensible side of love,
Which knows what time and weather are doing

To my brickwork; insulates my faulty wiring;
Laughs at my dryrotten jokes; remembers

My need for gloss and grouting; which keeps
My suspect edifice upright in air,

As Atlas did the sky.`,
    author: `U A Fanthorpe`,
    backstory: ``
  },
  {
    title: `Lines Written on a Seat on the Grand Canal, Dublin 'Erected to the memory of Mrs. Dermot O'Brien'`,
    text: `O commemorate me where there is water,
Canal water, preferably, so stilly
Greeny at the heart of summer. Brother
Commemorate me thus beautifully
Where by a lock niagarously roars

The falls for those who sit in the tremendous silence
Of mid-July. No one will speak in prose
Who finds his way to these Parnassian islands.
A swan goes by head low with many apologies,
Fantastic light looks through the eyes of bridges -
And look! a barge comes bringing from Athy
And other far-flung towns mythologies.
O commemorate me with no hero-courageous
Tomb - just a canal-bank seat for the passer-by`,
    author: `James Kavanagh`,
    backstory: `Brings me back to an earlier time in my life when I discovered Kavanagh and loved his voice, the reference to water and remembering me there, the spinning out from the small and significant to the big and significant, Sarah knows I love a good resting seat and we love a little plaque to commemorate like Tilly, and the memory of a fantastic canal holiday with the fam, (and meeting G en famille) coincidentally on a July day…`
  },
  {
    title: `When You Are Old`,
    text: `When you are old and grey and full of sleep,
And nodding by the fire, take down this book,
And slowly read, and dream of the soft look
Your eyes had once, and of their shadows deep;

How many loved your moments of glad grace,
And loved your beauty with love false or true,
But one man loved the pilgrim soul in you,
And loved the sorrows of your changing face;

And bending down beside the glowing bars,
Murmur, a little sadly, how Love fled
And paced upon the mountains overhead
And hid his face amid a crowd of stars.`,
    author: `William Butler Yeats`,
    backstory: `One of the poems by WB Yeats that won me the prestigious Andrew McMaster Cup at Feile Luimni in my mid-teens. Little old me from Lynwood Park claiming the space! It also conjures up pride in my mother for getting me there and finally the wistful tone captures where I am now…`
  },
  {
    title: `Extract from <i>The Book of Birds</i>`,
    text: `What's the extract? Unsure from the thing in the appendix`,
    author: `Who is the author?`,
    backstory: `And what is the backstory?`
  },
  {
    title: `Star Trek: Strange New World
Captain Pike’s Closing Log, Series 3 Episode 10`,
    text: `I always hated goodbyes.

How can we love people in our lives so deeply. And then one day, simply never see them again?

Perhaps these moments we share are anything but fleeting. But maybe, maybe they never really vanish.

Maybe Spock was right. And time is not what we think.

Maybe memory is as real as the present. And no one we have ever loved is truly gone.`,
    author: ``,
    backstory: `MAYBE WE LET THIS SPEAK FOR ITSELF? I.E. NO BACKSTORY ETC`
  }

];


```   {
    title: ``,
    text: ``,
    author: ``,
    backstory: ``
  }

  ```