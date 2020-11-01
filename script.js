id = 0;
const heroItems = [
  {
    index: 0,
    title: "Fearing Change",
    body: "Regardless of where we stand, I can bet that none of us like it when change is forced upon us. So we fight it because we feel out of control, and the unknown generally feels scary. But what if taking back control was all a matter of perspective?",
    img: "./images/desktop-image-hero-23_840x534.png",
  },
  {
    index: 1,
    title: "Chasing Happiness",
    body: "“Happiness is like a butterfly, the more you chase it, the more it will evade you, but if you notice the other things around you, it will gently come and sit on your shoulder.” ~Henry David Thoreau",
    img: "./images/desktop-image-hero-22_840x534.png",
  },
  {
    index: 2,
    title: "Negative Thoughts",
    body: "“When solving problems, dig at the root instead of just hacking at the leaves.” ~Anthony J. D’Angelo",
    img: "./images/Meditating-Earth_1_840x534.png",
  },
];

const toggleMenu = () => {
  document.querySelector(".main__hero__nav__links").classList.toggle("menu-open");
}

const toggleBackground = (value) => {
  id += value;
  if (id < 0) id += 3;
  id %= 3;
  currItem = heroItems[id];
  const hero = document.querySelector(".main__hero");
  hero.style.backgroundImage = `linear-gradient(to right, #0005 0%, #0005 100%), url(${currItem.img})`;

  document.querySelector(".main__tagline--header").innerHTML = currItem.title;
  document.querySelector(".main__tagline--body").innerHTML = currItem.body;
}