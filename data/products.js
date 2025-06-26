const products = [
  {
    id: "1",
    name: "Assassin's creed 2",
    price: "$99.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g1.jpg?updatedAt=1750879069315",
    description: "Join Ezio Auditore on an epic journey of revenge and honor in Renaissance Italy."
  },
  {
    id: "2",
    name: "God of war",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g2.jpg?updatedAt=1750879069329",
    description: "Embark on a brutal Norse mythology adventure with Kratos and his son Atreus."
  },
  {
    id: "3",
    name: "Call of duty",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g3.jpg?updatedAt=1750879069279",
    description: "Experience intense first-person shooter combat across dynamic warzones."
  },
  {
    id: "4",
    name: "Splitgate 2",
    price: "$99.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g4.jpg?updatedAt=1750879069318",
    description: "Enjoy fast-paced arena combat with sci-fi portals in this multiplayer shooter sequel."
  },
  {
    id: "5",
    name: "Assassin's creed 1",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g5.jpg?updatedAt=1750879069286",
    description: "Step into the life of Altair and uncover secrets during the Third Crusade."
  },
  {
    id: "6",
    name: "Fortnite",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g6.jpg?updatedAt=1750879069332",
    description: "Drop in and build to survive in the world’s most popular battle royale game."
  },
  {
    id: "7",
    name: "Spiderman 2",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g7.jpg?updatedAt=1750879069336",
    description: "Swing through New York City with Peter and Miles in this thrilling superhero adventure."
  },
  {
    id: "8",
    name: "GTA 5",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g8.jpg?updatedAt=1750879069302",
    description: "Explore the sprawling city of Los Santos with three unique criminal protagonists."
  },
  {
    id: "9",
    name: "GTA 4",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g9.jpg?updatedAt=1750879069283",
    description: "Follow Niko Bellic’s gritty tale of survival and revenge in Liberty City."
  },
  {
    id: "10",
    name: "Borderlands",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g10.jpg?updatedAt=1750879073691",
    description: "Loot, shoot, and explore the chaotic world of Pandora in this stylized RPG shooter."
  },
  {
    id: "11",
    name: "Avatar",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g11.jpg?updatedAt=1750879073877",
    description: "Immerse yourself in the stunning world of Pandora and defend the Na’vi homeland."
  },
  {
    id: "12",
    name: "Star wars",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g12.jpg?updatedAt=1750879069350",
    description: "Wield lightsabers and fight the Empire in a galaxy far, far away."
  },
  {
    id: "13",
    name: "Tomb raider",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g13.jpg?updatedAt=1750879104699",
    description: "Join Lara Croft as she uncovers ancient mysteries and survives harsh terrains."
  },
  {
    id: "14",
    name: "Zelda",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g14.jpg?updatedAt=1750879105348",
    description: "Embark on a legendary quest as Link to rescue Princess Zelda and defeat evil."
  },
  {
    id: "15",
    name: "Dead by daylight",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g15.jpg?updatedAt=1750879104778",
    description: "Play deadly hide-and-seek as a survivor or a killer in this horror multiplayer game."
  },
  {
    id: "16",
    name: "Dark souls 3",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g16.jpg?updatedAt=1750879104750",
    description: "Test your skill and patience in a dark, unforgiving world filled with deadly foes."
  },
  {
    id: "17",
    name: "Wanted dead",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g17.jpg?updatedAt=1750879104681",
    description: "Slash and shoot your way through cyberpunk enemies in this brutal action game."
  },
  {
    id: "18",
    name: "Watch dogs",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g18.jpg?updatedAt=1750879100563",
    description: "Hack the city’s systems and take down corrupt forces as a vigilante hacker."
  },
  {
    id: "19",
    name: "Guardians of galaxy",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g19.jpg?updatedAt=1750879100519",
    description: "Lead the Guardians on a wild space adventure filled with humor and heart."
  },
  {
    id: "20",
    name: "Cyberpunk",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g20.jpg?updatedAt=1750879100371",
    description: "Explore Night City as a cyber-enhanced mercenary in a sprawling open world."
  },
  {
    id: "21",
    name: "Destiny 2",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g21.jpg?updatedAt=1750879100519",
    description: "Become a Guardian and protect humanity in this sci-fi shooter MMO."
  },
  {
    id: "22",
    name: "Stray",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g22.jpg?updatedAt=1750879100524",
    description: "Play as a lost cat navigating a futuristic city full of robots and mystery."
  },
  {
    id: "23",
    name: "Black myth wukong",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g23.jpg?updatedAt=1750879100567",
    description: "Journey through ancient Chinese myth as the legendary Monkey King."
  },
  {
    id: "24",
    name: "Sifu",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g24.jpg?updatedAt=1750879100480",
    description: "Master Kung Fu combat and avenge your family in this stylish action game."
  },
  {
    id: "25",
    name: "Detroit",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g25.jpg?updatedAt=1750879100548",
    description: "Experience a gripping narrative where androids challenge the meaning of humanity."
  },
  {
    id: "26",
    name: "Fall guys",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g26.jpg?updatedAt=1750879100510",
    description: "Battle through wacky obstacle courses in this chaotic multiplayer party game."
  },
  {
    id: "27",
    name: "Minecraft",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g27.jpg?updatedAt=1750879100579",
    description: "Build, explore, and survive in a limitless blocky world of creativity."
  },
  {
    id: "28",
    name: "Avengers",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g28.jpg?updatedAt=1750879104587",
    description: "Assemble Earth’s Mightiest Heroes and save the world from powerful threats."
  },
  {
    id: "29",
    name: "Apex legends",
    price: "$199.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g29.jpg?updatedAt=1750879104611",
    description: "Jump into intense team-based battle royale action with unique characters."
  },
  {
    id: "30",
    name: "Gotham knights",
    price: "$59.99",
    image: "https://ik.imagekit.io/hg3rwpt4ia/Games/g30.jpg?updatedAt=1750879104679",
    description: "Protect Gotham as Batgirl, Robin, Red Hood, and Nightwing after Batman’s fall."
  }
];

export default products;
