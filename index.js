let movies = [
  {
    name:"Falcon and The Winter Soldier",
    des:"Marvel Series",
    image:"./images/slider 2.PNG",
  },
  {
    name:"Loki",
    des:"Marvel Series",
    image:"./images/slider 1.PNG",
  },
  {
    name:"Raya and The Last Dragon",
    des:"Disney And Pixar Animation",
    image:"./images/slider 4.PNG",
  },
  {
    name:"Wanda Vision",
    des:"Marvel Series",
    image:"./images/slider 3.PNG",
  },
  {
    name:"Luca",
    des:"Disney And Pixar Animation",
    image:"./images/slider 5.PNG",
  }
];

let caraousel = document.querySelector(".caraousel");
let sliders=[];

let slideIndex = 0;

const createSlide = () => {
  if(slideIndex>=movies.length){
    slideIndex = 0;
  }
  
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let txt =document.createTextNode(movies[slideIndex].name);
  let des =document.createTextNode(movies[slideIndex].des);

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(txt);
  p.appendChild(des);
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if(sliders.length){
    sliders[0].style.marginLeft = `calc(-${100 *  (sliders.length - 2)}% - ${ 30 * (sliders.length - 2)}px)`;
  }
};

for(let i=0;i<5;i++){
  createSlide();
};

setInterval(() => {
  createSlide();
},5000);

const videocards = [...document.querySelectorAll(".video-card")];
videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardcontainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardcontainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

const loginLink = document.querySelector(".login-link");
loginLink.addEventListener("click", () => {
  window.location.href = "login.html";
});