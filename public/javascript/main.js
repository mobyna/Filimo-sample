import FreeSwiper  from "./FreeSwiper/FreeSwiper"; 
import MortalSwiper from "./MortalSwiper/MortalSwiper";
import CommentSwiper from "./CommentSwiper/CommentSwiper";
import GolSwiper from "./GolSwiper/GolSwiper";
import karmaniSwiper from "./KarSwiper/KarSwiper";
import jokerSwiper from "./JokerSwiper/JokerSwiper";
import SarSwiper from "./SarSwiper/SarSwiper";


let menu_items = document.querySelectorAll(".menu_elem");
let menu_icon = document.querySelectorAll(".menu-icon");
[...menu_items].forEach((item) => {
    item.addEventListener("mouseenter", function() {
        item.classList.add("text-[#fbae3d]");
        const icon = item.querySelector(".menu-icon");
    icon.classList.add("fill-[#fbae3d]");
    });
    item.addEventListener("mouseleave", function(){
        item.classList.remove("text-[#fbae3d]");
        const icon = item.querySelector(".menu-icon");
    icon.classList.remove("fill-[#fbae3d]");
    });

}) 

let darkBtn = document.querySelectorAll(".subscription-btn");
[...darkBtn].forEach((btn) => {
    btn.addEventListener("mouseenter", function() {
        btn.classList.add("bg-opacity-60");
    });
    btn.addEventListener("mouseleave", function() {
        btn.classList.remove("bg-opacity-60");
    });
})

let brightBtn = document.querySelector("#bright");
brightBtn.addEventListener("mouseenter", function() {
    brightBtn.classList.add("backdrop-filter", "brightness-100");
  });
brightBtn.addEventListener("mouseleave", function() {
    brightBtn.classList.remove("backdrop-filter", "brightness-100");
  });




let favorser = document.querySelector("#favorser");
let favSeries = document.querySelector("#fav_series");
let favormov = document.querySelector("#favormov");
let favMovies = document.querySelector("#fav_movies")
favorser.addEventListener("click" , function(){
        favSeries.classList.remove("hidden");
        favMovies.classList.add("hidden");
        favorser.classList.add("bg-[#313131]");
        favormov.classList.remove("bg-[#313131]")
    });

favormov.addEventListener("click" , function(){
    
    favMovies.classList.remove("hidden");
    favSeries.classList.add("hidden");
    favormov.classList.add("bg-[#313131]")
    favorser.classList.remove("bg-[#313131]");
});



let images = document.querySelectorAll(".fav-img");
images.forEach((img)=>{
       img.addEventListener("mouseenter", function(){
              img.classList.remove("brightness-75");
              img.classList.add("brightness-125");
            });
            img.addEventListener("mouseleave", function(){
              img.classList.add("brightness-75");
              img.classList.remove("brightness-125");
            });
});



let mortalimg = document.querySelector("#mortalimg");
let mortaldiv = document.querySelector("#mortaldiv");
let kardaniimg = document.querySelector("#karmaniimg");
let kardiv = document.querySelector("#kar");  
let golimg = document.querySelector("#golimg");
let goldiv = document.querySelector("#goldiv");
let laimg = document.querySelector("#laimg");
let ladiv = document.querySelector("#ladiv");
let jokerimg = document.querySelector("#jokerimg");
let jokerdiv = document.querySelector("#jokerdiv");
let sarimg = document.querySelector("#sarimg");
let sardiv = document.querySelector("#sardiv");
mortalimg.addEventListener("click" , function(){
  mortaldiv.classList.remove("hidden");
    mortaldiv.classList.add("block");

  sardiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
});

kardaniimg.addEventListener("click" , function(){
  kardiv.classList.remove("hidden");
  kardiv.classList.add("block");

  sardiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
});

golimg.addEventListener("click" , function(){
  goldiv.classList.remove("hidden");
  goldiv.classList.add("block");

  sardiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
});

laimg.addEventListener("click" , function(){
  ladiv.classList.remove("hidden");
  ladiv.classList.add("block");

  sardiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
});

jokerimg.addEventListener("click" , function(){
  jokerdiv.classList.remove("hidden");
  jokerdiv.classList.add("block");

  
  sardiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
});

sarimg.addEventListener("click" , function(){
  sardiv.classList.remove("hidden");
  sardiv.classList.add("block");

  
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
});

let sotunimg = document.querySelector("#sotunimg");
let sotundiv = document.querySelector("#sotundiv");
let paltoimg = document.querySelector("#paltoimg");
let paltodiv = document.querySelector("#paltodiv");
let ruzimg = document.querySelector("#ruzimg");
let ruzdiv = document.querySelector("#ruzdiv");
let palaimg = document.querySelector("#palaimg");
let paladiv = document.querySelector("#paladiv");
let candyimg = document.querySelector("#candyimg");
let candydiv = document.querySelector("#candydiv");
let ahoimg = document.querySelector("#ahoimg");
let ahodiv = document.querySelector("#ahodiv");
sotunimg.addEventListener("click" , function(){
  sotundiv.classList.remove("hidden");
  sotundiv.classList.add("block");

  
  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  sardiv.classList.add("hidden");
});

paltoimg.addEventListener("click" , function(){
  paltodiv.classList.remove("hidden");
  paltodiv.classList.add("block");

  sotundiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  sardiv.classList.add("hidden");
});

ruzimg.addEventListener("click" , function(){
  ruzdiv.classList.remove("hidden");
  ruzdiv.classList.add("block");

  paltodiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  sardiv.classList.add("hidden");
});

palaimg.addEventListener("click" , function(){
  paladiv.classList.remove("hidden");
  paladiv.classList.add("block");

  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  sardiv.classList.add("hidden");
});

candyimg.addEventListener("click" , function(){
  candydiv.classList.remove("hidden");
  candydiv.classList.add("block");

  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  ahodiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  sardiv.classList.add("hidden");
});

ahoimg.addEventListener("click" , function(){
  ahodiv.classList.remove("hidden");
  ahodiv.classList.add("block");

  paltodiv.classList.add("hidden");
  ruzdiv.classList.add("hidden");
  paladiv.classList.add("hidden");
  candydiv.classList.add("hidden");
  sotundiv.classList.add("hidden");
  jokerdiv.classList.add("hidden");
  ladiv.classList.add("hidden");
  goldiv.classList.add("hidden");
  kardiv.classList.add("hidden");
  mortaldiv.classList.add("hidden");
  sardiv.classList.add("hidden");
});
        
let favitem = document.querySelectorAll(".fav");
favitem.forEach((child) =>{
            child.addEventListener("mouseenter", function(){
                child.classList.add("brightness-100");
        })
});
favitem.forEach((child) =>{
            child.addEventListener("mouseleave", function(){
                child.classList.remove("brightness-100");
        })
});



let acountbtn = document.querySelectorAll("#btn_acc");
[...acountbtn].forEach((btn) =>{
    btn.addEventListener("mouseenter" , function(){
        btn.classList.add("bg-opacity-60");
    });
    btn.addEventListener("mouseleave" , function(){
        btn.classList.remove("bg-opacity-60");
    });
});

let intrbtn = document.querySelectorAll("#introBox");
[...intrbtn].forEach((int) =>{
    int.addEventListener("mouseenter" , function(){
        int.classList.add("bg-[#292A2A]");
    })
    int.addEventListener("mouseleave" , function(){
        int.classList.remove("bg-[#292A2A]");
    })
});

let cinemabtn = document.querySelectorAll("#cinema_btn");
[...cinemabtn].forEach((cbtin) =>{
    cbtin.addEventListener("mouseenter", function(){
        cbtin.classList.add("bg-[#151515]");
    });
    cbtin.addEventListener("mouseleave", function(){
        cbtin.classList.remove("bg-[#151515]");
    });
});

let opening = document.querySelectorAll("#open_faq");
let faqOpen = document.querySelectorAll("#faq_open");
let faqIcon = document.querySelectorAll("#faq_icon");
[...opening].forEach((open , index) =>{
    open.addEventListener("click" , function(){
        faqOpen[index].classList.toggle("block");
        faqIcon[index].classList.toggle("rotate-45")
    });

});

let menuBox = document.querySelectorAll(".bottom_menu_box");
let bottomMH = document.querySelectorAll(".bm-hover");
[...bottomMH].forEach((menu , index) =>{
    menu.addEventListener("mouseenter", function(){
        menuBox[index].classList.remove("invisible");
    });
    menu.addEventListener("mouseleave", function(){
        menuBox[index].classList.add("invisible");
    });
});

let BMItem = document.querySelectorAll(".fav-bottom");
[...BMItem].forEach((btem) =>{
    btem.addEventListener("mouseenter" , function() {
        btem.classList.add("bg-[#474747]");
    });
    btem.addEventListener("mouseleave" , function() {
        btem.classList.remove("bg-[#474747]");
    });
});

let bti = document.querySelectorAll(".bottom-menu");
[...bti].forEach((alter)=>{
    alter.addEventListener("mouseenter" , function(){
        alter.classList.add("text-[whitesmoke]");
    });
    alter.addEventListener("mouseleave" , function(){
        alter.classList.remove("text-[whitesmoke]");
    });
});

let bgimage = document.querySelector("#subscription");
let bgimages = [
  "/images/6br30_desktop_1_v1.jpeg",
  "/images/f5gzj_desktop_1_v1.jpeg",
  "/images/mov_cvr_filimo_hor_149249_118.jpg",
  "/images/un8cg_desktop_1_v1.jpeg",
  "/images/fcs2p_desktop_1_v2.jpeg"
];
let imageIndex= 0 ;

async function changeBackgroundImage() {
    return new Promise(resolve => {
      bgimage.style.backgroundImage = `url(${bgimages[imageIndex]})`;
      imageIndex = (imageIndex + 1) % bgimages.length;
      resolve();
    });
  }
  
 
 
async function intervalFunction() {
  while (true) {
    await changeBackgroundImage();
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
};
  


async function executeFreeSwiper(){
  var swiper = new Swiper(".mySwiperOne", {
    slidesPerView: 3,
    spaceBetween: 30,
    rewind:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-nextOne",
      prevEl: ".swiper-button-prevOne",
    },
  });


};

async function executeMortalSwiperSwiper (){
    var swiper = new Swiper(".mySwiperTwo", {
        slidesPerView: 3,
        spaceBetween: 30,
        rewind:true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-nextTwo",
          prevEl: "swiper-button-prevTwo",
        },
      });
}


async function executecommentSwiper() {
    var swiper = new Swiper(".mySwiperThree", {
        slidesPerView: 15,
        slidesPerView: 3,
        spaceBetween: 10,
        rewind:true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-nextThree",
          prevEl: ".swiper-button-prevThree",
        },
         autoplay: {
            delay: 6000, // delay between slides in milliseconds
            disableOnInteraction: false, // disable autoplay when user interacts with the swiper
          },     
      });
}

async function executeKarSwiper() {
  var swiper = new Swiper(".mySwiperFour", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-nextFour",
      prevEl: "swiper-button-prevFour",
    },
  });
}

async function executeGolSwiper() {
  var swiper = new Swiper(".mySwiperFive", {
    slidesPerView: 3,
    spaceBetween: 30,
    rewind:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-nextTwo",
      prevEl: "swiper-button-prevTwo",
    },
  });
}


async function executeJokerSwiper() {
  var swiper = new Swiper(".mySwiperSeven", {
    slidesPerView: 3,
    spaceBetween: 30,
    rewind:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-nextSeven",
      prevEl: "swiper-button-prevSeven",
    },
  });
}


async function executeSarSwiper() {
  var swiper = new Swiper(".mySwiperEight", {
    slidesPerView: 3,
    spaceBetween: 30,
    rewind:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-nextEight",
      prevEl: "swiper-button-prevEight",
    },
  });
}


async function allComponents(){
  await FreeSwiper();
  await executeFreeSwiper();
  await MortalSwiper();
  await executeMortalSwiperSwiper();
  await karmaniSwiper();
  await executeKarSwiper();
  await GolSwiper();
  await executeGolSwiper();
  await jokerSwiper();
  await executeJokerSwiper();
  await SarSwiper();
  await executeSarSwiper();
  await CommentSwiper();
  await executecommentSwiper(15);
  await intervalFunction();
};

allComponents();


