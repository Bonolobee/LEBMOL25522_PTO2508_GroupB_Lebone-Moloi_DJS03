// Genre data is local so podcast previews can show readable tags from API genre ids.

export const genres = [
  {
    id: 1,
    title: "Personal Growth",
    description:
      "Looking to improve yourself and reach your full potential? Look no further than our collection of personal growth podcasts! Our curated selection features a wide range of experts and thought leaders sharing their insights and strategies on everything from goal setting and productivity to mindfulness and self-care. Whether you're looking to advance your career, improve your relationships, or simply live a happier and more fulfilling life, our podcasts offer practical, actionable advice to help you achieve your goals.",
    shows: ["10716", "10276", "6756", "10660"],
  },
  {
    id: 2,
    title: "Investigative Journalism",
    description:
      "Looking for a collection of podcasts that will keep you on the edge of your seat? Look no further than our selection of investigative journalism podcasts! These shows feature in-depth reporting and in-depth analysis of some of the most important and intriguing stories of our time. From breaking news to long-form investigations, these podcasts have it all. Whether you're a news junkie or just looking for something to keep you informed and engaged, these podcasts are the perfect choice. ",
    shows: [
      "10716",
      "5675",
      "10539",
      "9177",
      "8860",
      "5012",
      "9054",
      "7654",
      "8256",
      "8291",
      "5718",
      "5276",
      "5964",
      "6465",
      "5320",
      "6451",
      "5692",
      "6430",
    ],
  },
  {
    id: 3,
    title: "History",
    description:
      "Experience the past like never before with our collection of history podcasts! Whether you're a history buff or just looking to learn something new, our selection of shows offers something for everyone. From ancient civilizations to modern times, our podcasts cover a wide range of historical topics and eras. Listen to expert historians as they delve into the stories and events that shaped our world, and gain a deeper understanding of the people and cultures that came before us. These podcasts are perfect for anyone looking to expand their knowledge and gain a new perspective on history.",
    shows: [
      "5279",
      "9177",
      "6807",
      "8514",
      "5629",
      "8364",
      "5964",
      "9041",
      "5702",
      "5320",
      "6717",
      "5968",
      "8760",
    ],
  },
  {
    id: 4,
    title: "Comedy",
    description:
      "Get ready to laugh with our collection of comedy podcasts! Whether you're in need of a pick-me-up or just looking for something to make you chuckle, our selection of shows has you covered. From stand-up comedy to improv, our podcasts feature a wide range of comedic styles and formats. Listen to some of the funniest comedians and comedy writers as they share their takes on current events, pop culture, and everyday life. These podcasts are perfect for anyone looking to add a little humor to their day. ",
    shows: ["6807"],
  },
  {
    id: 5,
    title: "Entertainment",
    description:
      "Entertainment lovers, get ready for a treat! Our collection of entertainment podcasts will keep you entertained, informed and up-to-date with all the latest trends, news and happenings in the entertainment world. From film and TV to music and celebrity interviews, our selection of shows covers it all. Listen to experts and industry insiders as they share their thoughts, opinions and inside scoop on the entertainment landscape. These podcasts are perfect for anyone looking to stay in the know about the latest and greatest in entertainment.",
    shows: ["6807", "6631", "8256", "6756", "5702", "9620", "10758"],
  },
  {
    id: 6,
    title: "Business",
    description:
      "For those who want to keep their finger on the pulse of the entertainment industry, our collection of entertainment business podcasts is the perfect choice. These shows provide in-depth analysis and expert insight into the business side of the entertainment world, covering topics such as film and television production, music industry, digital media, and more. Listen to industry leaders and experts as they discuss the latest trends, strategies, and challenges facing the entertainment industry today. Whether you're a professional working in the field or just a casual observer, these podcasts are a must-listen for anyone interested in the business side of entertainment.",
    shows: ["8364", "6717", "8760"],
  },
  {
    id: 7,
    title: "Fiction",
    description:
      "Get ready to be transported to new worlds and lose yourself in captivating stories with our collection of fiction-focused entertainment podcasts. These shows offer a wide range of fiction genres, from science fiction to fantasy, horror and more. Listen to talented writers and storytellers as they share their original works and take you on a journey through their captivating and imaginative worlds. Whether you're a fan of classic literature or looking for something new and exciting, these podcasts are perfect for anyone who loves a good story.",
    shows: ["6631", "9664", "8188", "9702", "9695", "9994", "9263", "9666"],
  },
  {
    id: 8,
    title: "News",
    description:
      "Stay informed and on top of the latest events with our collection of current news podcasts. These shows provide in-depth coverage and analysis of the most important stories happening around the world, from politics and world events to science, technology and more. Listen to top journalists and experts as they share their insights and keep you up-to-date on the latest developments. Whether you're looking to stay informed or simply want to stay in the know, these podcasts are a must-listen for anyone interested in current events.",
    shows: ["8291", "5718"],
  },
  {
    id: 9,
    title: "Kids and Family",
    description:
      "Bring some fun and learning to your family's ears with our collection of kids and family podcasts. These shows offer a wide range of entertaining and educational content for children of all ages, from interactive storytelling to science experiments, music, comedy, and more. Listen to expert educators and entertainers as they engage and inspire young minds with their engaging content and interactive activities. These podcasts are perfect for anyone looking for a fun and educational way to keep the kids entertained and engaged. ",
    shows: [
      "8188",
      "9687",
      "9702",
      "9665",
      "10182",
      "9994",
      "9705",
      "10934",
      "9694",
      "9693",
      "9704",
      "9739",
      "9691",
    ],
  },
];

export const fallbackPodcasts = [
  {
    id: "10716",
    title: "Something Was Wrong",
    description:
      "A true-crime docuseries about discovery, trauma, and recovery from shocking life events and abusive relationships.",
    seasons: 14,
    image:
      "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
    genres: [1, 2],
    updated: "2022-11-03T07:00:00.000Z",
  },
  {
    id: "5279",
    title: "American History Tellers",
    description:
      "A history podcast exploring the events, people, and movements that shaped America.",
    seasons: 51,
    image:
      "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png",
    genres: [3],
    updated: "2022-11-02T07:01:00.000Z",
  },
  {
    id: "6807",
    title: "Even the Rich",
    description:
      "A storytelling show about celebrity dynasties, public scandals, and the lives behind famous names.",
    seasons: 33,
    image:
      "https://content.production.cdn.art19.com/images/c3/55/d2/da/c355d2da-f845-47df-a4e6-22b70a5082bb/c290fe89d3a699dd5c316f5f4cfe2ca942183cef5d6ac4fc2d7d6df296690c9e7183f79422dcb0b37af7c7e7e59de0e36cddd3b01500bf066a470614c9a0af6d.png",
    genres: [4, 5, 3],
    updated: "2022-11-01T07:08:00.000Z",
  },
  {
    id: "10276",
    title: "This Podcast Will Kill You",
    description:
      "A science podcast that explores diseases through history, biology, and public health.",
    seasons: 5,
    image:
      "https://content.production.cdn.art19.com/images/f5/16/e0/99/f516e099-4c64-4737-9fdb-55f4d45a4003/6d14be58e0a54d21128c239dd933e0f3c36ca00f85ea7294cbea91a2b214d2384361c2a765842eef66e8583b2c21302c8fd2b1eb4d32e3805481292d758f20aa.jpeg",
    genres: [1],
    updated: "2022-10-25T07:01:00.000Z",
  },
];
