AOS.init({
  disable: "mobile",
  disable: function () {
    var maxWidth = 820;
    return window.innerWidth < maxWidth;
  },
  once: true,
});
let cv = document.querySelector(".cv");
let hamburger = document.querySelector("#hamburger");
$(".burger-menu").on("click", () => {
  $(hamburger).toggleClass("open");
  $(".header-nav").toggleClass("burger-click");
  $("#canvas").toggleClass("cv-height");
  $(".right-content").toggleClass("right-con");
  $("body").toggleClass("overflow");
});
$("#next").on("click", () => {
  $(".swiper-slide-next .swiper-item-content").css(
    "transform",
    "translateX(250px)",
    "transition",
    "transform 800ms ease",
    "opacity",
    "0"
  );
});

var swiper0 = new Swiper("#mySwiper0", {
  speed: 700,

  spaceBetween: 0,
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper0.on("slideChange", function () {
  pgIndecator();
});
// custom pagination
let swPaginations = document.querySelectorAll(
  ".swp-0 .swiper-pagination-bullet"
);
let myPaginations = document.querySelectorAll(".tab-menu li");
function pgIndecator() {
  swPaginations.forEach((el, index) => {
    if (el.classList.contains("swiper-pagination-bullet-active")) {
      myPaginations.forEach((el) => el.classList.remove("active"));
      myPaginations[index].classList.add("active");
    }
  });
}

myPaginations.forEach((el, index) => {
  el.addEventListener("click", function () {
    swPaginations[index].click();
  });
});

//===swiper2=======================================

var swiper = new Swiper(".modSwiper", {
  speed: 800,
  grabCursor: true,
  loop: true,
  initialSlide: 0,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    820: {
      slidesPerView: 3.8,
      spaceBetween: 25,
    },
  },
});
//===============================================================cardSwiper
var swiper = new Swiper(".cardSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
//================================================================
$(".floating-label input, .floating-label textarea")
  .on("focus blur", function (e) {
    $(this)
      .parents(".floating-label")
      .toggleClass("focused", e.type === "focus" || this.value.length > 0);
  })
  .trigger("blur");
//================================================================================
var counted = 0;
$(window).scroll(function () {
  if (document.getElementById("counter")) {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      const counters = document.querySelectorAll(".value");
      const speed = 200;

      counters.forEach((counter) => {
        const animate = () => {
          const value = +counter.getAttribute("number");
          const data = +counter.innerText;

          const time = value / speed;
          if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 15);
          } else {
            counter.innerText = value;
          }
        };

        animate();
      });
      counted = 1;
    }
  }
});

//======================================================
$(".slide-inner").hide();
$(".web-link").hide();
$(".bg-gradient").hide();
$(".card-Rteco").hide();
$(document).ready(function () {
  $(".slide-inner").animate(
    {
      width: "toggle",
    },
    1000
  );

  setTimeout(() => {
    $(".web-link").slideToggle(700);
  }, 1000);
  setTimeout(() => {
    $(".bg-gradient").slideToggle(700);
  }, 1000);
  setTimeout(() => {
    $(".card-Rteco").slideToggle(700);
  }, 1700);
});
//=======================================================
var txtTyping = function (el, toTyping, period) {
  this.toTyping = toTyping;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

txtTyping.prototype.tick = function () {
  var i = this.loopNum % this.toTyping.length;
  var fullTxt = this.toTyping[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-typing");
  for (var i = 0; i < elements.length; i++) {
    var toTyping = elements[i].getAttribute("data-typing");
    var period = elements[i].getAttribute("data-period");
    if (toTyping) {
      new txtTyping(elements[i], JSON.parse(toTyping), period);
    }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-typing > .wrap { border-right: 2px solid transparent}";
  document.body.appendChild(css);
};
//====================================================================================
const canvas = document.querySelector("canvas");
const canvasWrap = document.querySelector(".canvas-wrap");
if (canvas) {
  canvas.width = window.innerWidth;
  canvas.height = canvasWrap.clientHeight + 80;
  console.log(canvas.height);
  if (window.innerWidth < 820) {
    canvas.height = canvasWrap.clientHeight + 103;
  }
  let c = canvas.getContext("2d");

  const color = [
    "rgba(102, 0, 204, .855)",
    "rgba(255, 204, 0, .900)",
    "rgba(158, 169, 240, 0.877)",
    "rgba(204, 0, 0, 0.945)",
    "rgba(201, 54, 204, .907)",
    "rgba(236, 71, 71, 0.897)",
    "rgba(0, 0, 255, 0.932)",
  ];

  var maxRadius = 7;
  var minRadius = 7;
  var mouse = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
  });

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = canvasWrap.clientHeight;
    init();
  });

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color[Math.floor(Math.random() * color.length)];

    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
    };

    this.update = function () {
      this.draw();
      if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
        this.dy = -this.dy;
      }
      this.y -= this.dy;
      this.x += this.dx;

      if (
        mouse.x - this.x < 30 &&
        mouse.x - this.x > -30 &&
        mouse.y - this.y < 30 &&
        mouse.y - this.y > -30 &&
        this.radius < maxRadius
      ) {
        this.radius += 1;
      } else if (this.radius > minRadius) {
        this.radius -= 1;
      }
    };
  }

  var circleArray = [];

  function init() {
    circleArray = [];
    for (var i = 0; i < 20; i++) {
      var r = Math.floor(Math.random() * 2) + 1;
      var x = Math.random() * (innerWidth - r * 2) + r;
      var y = Math.random() * (innerHeight - r * 2) + r;
      var dx = (Math.random() - 0.3) * 2;
      var dy = (Math.random() - 0.3) * 2;
      circleArray.push(new Circle(x, y, dx, dy, r));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }

  animate();
  init();
}
//===============================================
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".content-img").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
//===============================================================
let selected = document.querySelector(".selected");
let optionsConteiner = document.querySelector(".options-container");
let optionList = document.querySelectorAll(".option");

if (selected) {
  selected.addEventListener("click", function () {
    optionsConteiner.classList.toggle("activ");
  });
  optionList.forEach((el) => {
    el.addEventListener("click", () => {
      selected.innerHTML = el.querySelector("label").innerHTML;
      optionsConteiner.classList.remove("activ");
    });
  });
}
//===================================================================

const view = document.querySelector("#viewEl");
const hideWhenBoxInView = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) {
    // If not in view
    view.style.height = "400px";
  } else {
    view.style.height = "700px";
    if (window.innerWidth < 1441) {
      view.style.height = "580px";
    }
    if (window.innerWidth < 575) {
      view.style.height = "0px";
    }
  }
});
if (document.getElementById("viewEl")) {
  hideWhenBoxInView.observe(document.getElementById("viewEl"));
  const hideBoxInView = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) {
      // If not in view
      view.style.height = "200px";
    } else {
      view.style.height = "700px";
      if (window.innerWidth < 1441) {
        view.style.height = "580px";
      }
    }
  });
  hideBoxInView.observe(document.getElementById("viewEl"));
}
//=================================================================
let h4 = document.querySelectorAll(".h4");

for (let i = 0; i < h4.length; i++) {
  h4[i].addEventListener("click", () => {
    h4[i].classList.toggle("footer-nav-select");
    el = h4[i].nextElementSibling;
    $(el).toggleClass("f-n-ul");
  });
}

//===========================================
