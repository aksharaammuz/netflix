// ============================================================
// MOVIE / SHOW LIBRARY
// Replace `trailer` with your own YouTube embed URL:
//   https://www.youtube.com/embed/YOUR_VIDEO_ID
// ============================================================

const MOVIES = [
  // ---------- SCI-FI / SUPERNATURAL ----------
  {
    id: "stranger-things",
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    year: 2022, rating: "TV-14", duration: "4 Seasons",
    genres: ["Sci-Fi", "Horror", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU"
  },
  {
    id: "wednesday",
    title: "Wednesday",
    description: "Follow Wednesday Addams' years as a student at Nevermore Academy, where she attempts to master her emerging psychic ability.",
    year: 2022, rating: "TV-14", duration: "1 Season",
    genres: ["Comedy", "Fantasy", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    trailer: "https://www.youtube.com/embed/Di310WS8zLk"
  },
  {
    id: "dark",
    title: "Dark",
    description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    year: 2020, rating: "TV-MA", duration: "3 Seasons",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3lBDg3i6nn5R2NKFCJ6oKyUo2j5.jpg",
    trailer: "https://www.youtube.com/embed/rrwycJ08PSA"
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    year: 2021, rating: "TV-MA", duration: "3 Seasons",
    genres: ["Action", "Adventure", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    trailer: "https://www.youtube.com/embed/ndl1W4ltcmg"
  },
  {
    id: "umbrella-academy",
    title: "The Umbrella Academy",
    description: "A dysfunctional family of adopted sibling superheroes reunites to solve the mystery of their father's death.",
    year: 2022, rating: "TV-MA", duration: "3 Seasons",
    genres: ["Action", "Sci-Fi", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/scZlQQGnOaKw8d9HnXnKl3NjXnD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qJxzjUjCpTPvDHldNnlbRC4OqEh.jpg",
    trailer: "https://www.youtube.com/embed/KHPhK8h1WW8"
  },
  {
    id: "mandalorian",
    title: "The Mandalorian",
    description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    year: 2023, rating: "TV-14", duration: "3 Seasons",
    genres: ["Action", "Adventure", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    trailer: "https://www.youtube.com/embed/aOC8E8z_ifw"
  },
  {
    id: "loki",
    title: "Loki",
    description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Endgame.",
    year: 2023, rating: "TV-14", duration: "2 Seasons",
    genres: ["Action", "Adventure", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/zY4XaO0iB4tZQkQn5uG5mQ0i3nQ.jpg",
    trailer: "https://www.youtube.com/embed/nW948Va-l10"
  },
  {
    id: "wandavision",
    title: "WandaVision",
    description: "Blends the style of classic sitcoms with the MCU in which Wanda Maximoff and Vision begin to suspect everything is not as it seems.",
    year: 2021, rating: "TV-14", duration: "1 Season",
    genres: ["Drama", "Fantasy", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8mOqBUiGVJ0aG7mXjH5m8H3m5m8.jpg",
    trailer: "https://www.youtube.com/embed/sj0DqBjLFlE"
  },
  {
    id: "the-boys",
    title: "The Boys",
    description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    year: 2024, rating: "TV-MA", duration: "4 Seasons",
    genres: ["Action", "Comedy", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2zmJf5iVjK5m5dGd5m8H3m5m8H.jpg",
    trailer: "https://www.youtube.com/embed/M1bhOaLV4FU"
  },
  {
    id: "game-of-thrones",
    title: "Game of Thrones",
    description: "Nine noble families fight for control over the lands of Westeros while an ancient enemy returns after being dormant for millennia.",
    year: 2019, rating: "TV-MA", duration: "8 Seasons",
    genres: ["Action", "Adventure", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
    trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ"
  },
  {
    id: "house-of-dragon",
    title: "House of the Dragon",
    description: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke.",
    year: 2024, rating: "TV-MA", duration: "2 Seasons",
    genres: ["Action", "Adventure", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    trailer: "https://www.youtube.com/embed/DotnJ7tTA34"
  },
  {
    id: "last-of-us",
    title: "The Last of Us",
    description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    year: 2023, rating: "TV-MA", duration: "1 Season",
    genres: ["Action", "Adventure", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    trailer: "https://www.youtube.com/embed/uLtkt8BonwM"
  },
  {
    id: "vikings",
    title: "Vikings",
    description: "The adventures of Ragnar Lothbrok, the greatest hero of his age, and his band of Viking brothers and his family.",
    year: 2020, rating: "TV-MA", duration: "6 Seasons",
    genres: ["Action", "Adventure", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9m4RVv5Yz8cHhvvK5m8H3m5m8H.jpg",
    trailer: "https://www.youtube.com/embed/9GgRc9j2WjE"
  },
  {
    id: "the-flash",
    title: "The Flash",
    description: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed.",
    year: 2023, rating: "TV-PG", duration: "9 Seasons",
    genres: ["Action", "Adventure", "Sci-Fi"],
    poster: "https://image.tmdb.org/t/p/w500/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/Yj0l7iG4YjE"
  },
  {
    id: "arrow",
    title: "Arrow",
    description: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea.",
    year: 2020, rating: "TV-14", duration: "8 Seasons",
    genres: ["Action", "Adventure", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/gKG5QGz5Ngf8k51PA9mS5JQJgiV.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3m5m8H3m5m8H3m5m8H3m5m8H.jpg",
    trailer: "https://www.youtube.com/embed/Hn4hWFq7-Bk"
  },
  {
    id: "supernatural",
    title: "Supernatural",
    description: "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds.",
    year: 2020, rating: "TV-14", duration: "15 Seasons",
    genres: ["Drama", "Fantasy", "Horror"],
    poster: "https://image.tmdb.org/t/p/w500/KoYWXbnYuS3b0GyQPkbous344X.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/rWz6X5cIbbQ"
  },
  {
    id: "the-100",
    title: "The 100",
    description: "Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends one hundred juvenile delinquents back to Earth.",
    year: 2020, rating: "TV-14", duration: "7 Seasons",
    genres: ["Drama", "Sci-Fi", "Action"],
    poster: "https://image.tmdb.org/t/p/w500/wjZ9QykaIS9sHPk1cGZaCgHLnv5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8m5m8H3m5m8H3m5m8H3m5m8H.jpg",
    trailer: "https://www.youtube.com/embed/1m5m8H3m5m8"
  },
  {
    id: "black-mirror",
    title: "Black Mirror",
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    year: 2023, rating: "TV-MA", duration: "6 Seasons",
    genres: ["Drama", "Sci-Fi", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/7PRddO7z7mcPi21nZ3G7HlP0hVq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/2m5m8H3m5m8"
  },
  {
    id: "sandman",
    title: "The Sandman",
    description: "Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about restoring order to his kingdom.",
    year: 2022, rating: "TV-MA", duration: "1 Season",
    genres: ["Drama", "Fantasy", "Horror"],
    poster: "https://image.tmdb.org/t/p/w500/eqgCCJYhK9F1Y7JvN0F6mA6p0N.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3m5m8H3m5m8H3m5m8H3m5m8H.jpg",
    trailer: "https://www.youtube.com/embed/3m5m8H3m5m8"
  },

  // ---------- CRIME / THRILLER ----------
  {
    id: "money-heist",
    title: "Money Heist",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros.",
    year: 2021, rating: "TV-MA", duration: "5 Parts",
    genres: ["Action", "Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
    trailer: "https://www.youtube.com/embed/_InqQJRqGW4"
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    year: 2013, rating: "TV-MA", duration: "5 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY"
  },
  {
    id: "better-call-saul",
    title: "Better Call Saul",
    description: "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White.",
    year: 2022, rating: "TV-MA", duration: "6 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/HN4oydykJFc"
  },
  {
    id: "ozark",
    title: "Ozark",
    description: "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    year: 2022, rating: "TV-MA", duration: "4 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzn7Mx4EMcfW2emYw8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/5hAXVqrljbs"
  },
  {
    id: "narcos",
    title: "Narcos",
    description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.",
    year: 2017, rating: "TV-MA", duration: "3 Seasons",
    genres: ["Biography", "Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/U7elNhHwgBU"
  },
  {
    id: "peaky-blinders",
    title: "Peaky Blinders",
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.",
    year: 2022, rating: "TV-MA", duration: "6 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/oVzVdvGIC7U"
  },
  {
    id: "lucifer",
    title: "Lucifer",
    description: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth.",
    year: 2021, rating: "TV-14", duration: "6 Seasons",
    genres: ["Crime", "Drama", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/X4bF_quwNtw"
  },
  {
    id: "prison-break",
    title: "Prison Break",
    description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison.",
    year: 2017, rating: "TV-14", duration: "5 Seasons",
    genres: ["Action", "Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/AL9zL8m5m8H"
  },
  {
    id: "lost",
    title: "Lost",
    description: "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
    year: 2010, rating: "TV-14", duration: "6 Seasons",
    genres: ["Adventure", "Drama", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/og6S0aTZU6YUJcbIz0IXFqRiFLb.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/m5m8H3m5m8H"
  },
  {
    id: "walking-dead",
    title: "The Walking Dead",
    description: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
    year: 2022, rating: "TV-MA", duration: "11 Seasons",
    genres: ["Drama", "Horror", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/n7pvKZgC3uK3zHmwGxpzLMPjZ7i.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/8m5m8H3m5m8"
  },
  {
    id: "lupin",
    title: "Lupin",
    description: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    year: 2023, rating: "TV-MA", duration: "3 Parts",
    genres: ["Action", "Crime", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/sg3T0C40tSjqLqGvO9xRwK2GdQX.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/9m5m8H3m5m8"
  },
  {
    id: "alice-borderland",
    title: "Alice in Borderland",
    description: "A group of bored delinquents are transported to a parallel dimension as part of a survival game.",
    year: 2022, rating: "TV-MA", duration: "2 Seasons",
    genres: ["Action", "Sci-Fi", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/xIu9HXvU7f6mDLcG9QlHfWrLlJp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/0m5m8H3m5m8"
  },

  // ---------- DRAMA ----------
  {
    id: "the-crown",
    title: "The Crown",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    year: 2023, rating: "TV-MA", duration: "6 Seasons",
    genres: ["Biography", "Drama", "History"],
    poster: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/JWtnJjn6ng0"
  },
  {
    id: "queens-gambit",
    title: "The Queen's Gambit",
    description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.",
    year: 2020, rating: "TV-MA", duration: "Limited Series",
    genres: ["Drama", "Sport"],
    poster: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/CDrieqwSdgI"
  },
  {
    id: "13-reasons-why",
    title: "13 Reasons Why",
    description: "Follows teenager Clay Jensen as he returns home from school to find a mysterious box with his name on it lying on his porch.",
    year: 2020, rating: "TV-MA", duration: "4 Seasons",
    genres: ["Drama", "Mystery", "Thriller"],
    poster: "https://image.tmdb.org/t/p/w500/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/1m5m8H3m5m8"
  },
  {
    id: "elite",
    title: "Elite",
    description: "When three working-class teenagers begin attending an exclusive private school, the clash between them and the wealthy students leads to murder.",
    year: 2023, rating: "TV-MA", duration: "7 Seasons",
    genres: ["Crime", "Drama", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/oF4aLDyLwgbWr2pGTTdY6NsZ0Xh.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/2m5m8H3m5m8"
  },
  {
    id: "riverdale",
    title: "Riverdale",
    description: "While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.",
    year: 2023, rating: "TV-14", duration: "7 Seasons",
    genres: ["Crime", "Drama", "Mystery"],
    poster: "https://image.tmdb.org/t/p/w500/w0jLLvB5i9KHZm5vBPkPXnPCO2W.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/3m5m8H3m5m8"
  },
  {
    id: "sex-education",
    title: "Sex Education",
    description: "A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school.",
    year: 2023, rating: "TV-MA", duration: "4 Seasons",
    genres: ["Comedy", "Drama", "Romance"],
    poster: "https://image.tmdb.org/t/p/w500/8j12tohv1OBg0BTRj9eLX4ZSZqO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/BjJwEF7o7Sg"
  },
  {
    id: "suits",
    title: "Suits",
    description: "On the run from a drug deal gone bad, Mike Ross, a brilliant college-dropout, finds himself working with Harvey Specter, one of New York City's best lawyers.",
    year: 2019, rating: "TV-14", duration: "9 Seasons",
    genres: ["Comedy", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/vAZKdoYQjvV6JcL4aXq0Z8kZ0Jj.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/4m5m8H3m5m8"
  },
  {
    id: "how-i-met-your-mother",
    title: "How I Met Your Mother",
    description: "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
    year: 2014, rating: "TV-14", duration: "9 Seasons",
    genres: ["Comedy", "Drama", "Romance"],
    poster: "https://image.tmdb.org/t/p/w500/b34jPzmB0wZy7ejUZoleXOl2RRI.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/5m5m8H3m5m8"
  },
  {
    id: "modern-family",
    title: "Modern Family",
    description: "Three different but related families face trials and tribulations in their own uniquely comedic ways.",
    year: 2020, rating: "TV-PG", duration: "11 Seasons",
    genres: ["Comedy", "Drama", "Romance"],
    poster: "https://image.tmdb.org/t/p/w500/h1uS4nBQhQm5YqZ8jJ0pJ4xJvJz.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/6m5m8H3m5m8"
  },

  // ---------- COMEDY ----------
  {
    id: "the-office",
    title: "The Office",
    description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    year: 2013, rating: "TV-14", duration: "9 Seasons",
    genres: ["Comedy"],
    poster: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/LHOtZ4bWgEU"
  },
  {
    id: "friends",
    title: "Friends",
    description: "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
    year: 2004, rating: "TV-14", duration: "10 Seasons",
    genres: ["Comedy", "Romance"],
    poster: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/hDNNmeeJs1Q"
  },
  {
    id: "brooklyn-99",
    title: "Brooklyn Nine-Nine",
    description: "Jake Peralta, an immature but talented NYPD detective in Brooklyn's 99th Precinct, comes into immediate conflict with his new commanding officer.",
    year: 2021, rating: "TV-14", duration: "8 Seasons",
    genres: ["Comedy", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/hgRMSOt7a1b8qyQR68vUix7JPzn.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/sPBt7jL5mWk"
  },
  {
    id: "rick-and-morty",
    title: "Rick and Morty",
    description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
    year: 2024, rating: "TV-MA", duration: "7 Seasons",
    genres: ["Animation", "Adventure", "Comedy"],
    poster: "https://image.tmdb.org/t/p/w500/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/7m5m8H3m5m8"
  },
  {
    id: "the-good-place",
    title: "The Good Place",
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.",
    year: 2020, rating: "TV-14", duration: "4 Seasons",
    genres: ["Comedy", "Drama", "Fantasy"],
    poster: "https://image.tmdb.org/t/p/w500/o9Q7NfN4fFq3N0Z8nJ0pJ4xJvJz.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/8m5m8H3m5m8"
  },
  {
    id: "bojack",
    title: "BoJack Horseman",
    description: "BoJack Horseman was the star of the hit television show 'Horsin' Around' in the '80s and '90s, now he's washed up, living in Hollywood.",
    year: 2020, rating: "TV-MA", duration: "6 Seasons",
    genres: ["Animation", "Comedy", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/pB1Rk3MpJXbF0J8FqZ8Z8Z8Z8Z8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5m8H3m5m8H3m5m8H3m5m8H3m5.jpg",
    trailer: "https://www.youtube.com/embed/9m5m8H3m5m8"
  }
];

// ============================================================
// ROWS CONFIGURATION
// ============================================================

const ROWS = [
  {
    title: "Trending Now",
    isTop10: true, // This will trigger the big numbers!
    ids: [
      "stranger-things", "wednesday", "money-heist", "squid-game",
      "the-witcher", "the-crown", "lucifer", "the-boys",
      "game-of-thrones", "house-of-dragon"
    ]
  },
  {
    title: "Action & Adventure",
    ids: [
      "the-witcher", "money-heist", "squid-game", "breaking-bad",
      "mandalorian", "loki", "the-boys", "game-of-thrones",
      "house-of-dragon", "last-of-us", "vikings", "the-flash",
      "arrow", "prison-break", "narcos"
    ]
  },
  {
    title: "Sci-Fi & Fantasy",
    ids: [
      "stranger-things", "dark", "wednesday", "the-witcher",
      "umbrella-academy", "mandalorian", "loki", "wandavision",
      "the-100", "black-mirror", "sandman", "alice-borderland",
      "supernatural", "lost"
    ]
  },
  {
    title: "Crime & Thrillers",
    ids: [
      "money-heist", "breaking-bad", "better-call-saul", "ozark",
      "narcos", "peaky-blinders", "lucifer", "prison-break",
      "walking-dead", "lupin", "alice-borderland", "elite",
      "riverdale", "brooklyn-99"
    ]
  },
  {
    title: "Comedies",
    ids: [
      "the-office", "friends", "brooklyn-99", "rick-and-morty",
      "the-good-place", "bojack", "sex-education", "modern-family",
      "how-i-met-your-mother", "suits", "wednesday", "the-boys"
    ]
  }
];