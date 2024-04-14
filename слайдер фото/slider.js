
let images = [{
    url: "./IMG/PNG/rostov_on_don.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don",
    apart: "LCD admiral",
    area: "81 m2",
    time: "3.5 months"
  }, {
    url: "./IMG/PNG/sochi.png",
    title: "Sochi Thieves",
    city: "Sochi",
    apart: "Thieves",
    area: "105 m2",
    time: "4 months"
  }, {
    url: "./IMG/PNG/rostov_on_don_patriotic.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don",
    apart: "Patriotic",
    area: "93 m2",
    time: "3 months"
  }];
  
    
  function initSlider() {
    if (!images || !images.length) return;
  }
  
  
  let sliderImages = document.querySelector(".slider_image");
  let sliderArrows = document.querySelector(".slider_nav");
  let sliderDots = document.querySelector(".slider_nav__dots");
  let sliderLinks = document.querySelector(".slider_objects");
  let sliderCitys = document.querySelector(".slider_info__city");
  let sliderAreas = document.querySelector(".slider_info__area");
  let sliderTimes = document.querySelector(".slider_info__time");
  
  initImages();
  initArrows();
  initDots();
  initLinks();
  initCitys();
  initAreas();
  initTimes();

  
  function initImages() {
    images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider_nav__button").forEach(arrow => {
        arrow.addEventListener("click", function () {
            let currentNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
                nextNumber = currentNumber === 0 ? images.length - 1 : currentNumber - 1;
            } else {
                nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
            }
            moveSlider(nextNumber);
        })
    })
  }
  
  function initDots() {
    images.forEach((image, index) => {
        let dot = `<div class="slider_nav__dots n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider_nav__dots").forEach(dot => {
        dot.addEventListener("click", function () {
            moveSlider(this.dataset.index);
        });
    });
  }
  
  
  function initLinks() {
    images.forEach((image, index) => {
        let linkDiv = `<li><a class="projects__link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</a></li>`;
        sliderLinks.innerHTML += linkDiv;
    });
    sliderLinks.querySelectorAll(".projects__link").forEach(linkDiv => {
        linkDiv.addEventListener("click", function (event) {
            event.preventDefault();
            moveSlider(this.dataset.index);
  
        });
    });
  }
  
  function initCitys() {
    images.forEach((elem, index) => {
        let city = `<div class="projects__city n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].city}<br>${images[index].apart}</div>`;
        sliderCitys.innerHTML += city;
    });
  }
  
  function initAreas() {
    images.forEach((image, index) => {
        let area = `<div class="projects__area n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].area}</div>`;
        sliderAreas.innerHTML += area;
    });
  }
  
  function initTimes() {
    images.forEach((image, index) => {
        let time = `<div class="projects__time n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].time}</div>`;
        sliderTimes.innerHTML += time;
    });
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
  
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  
    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");
    
    sliderCitys.querySelector(".active").classList.remove("active");
    sliderCitys.querySelector(".n" + num).classList.add("active");
  
    sliderAreas.querySelector(".active").classList.remove("active");
    sliderAreas.querySelector(".n" + num).classList.add("active");
  
    sliderTimes.querySelector(".active").classList.remove("active");
    sliderTimes.querySelector(".n" + num).classList.add("active");
  }
  
  document.addEventListener("DOMContentLoaded" , initSlider());
