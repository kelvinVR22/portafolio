// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-sun')){
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.remove('active');
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
       
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // typing text animation script
    var typed = new Typed(".main", {
        strings: ["Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    var typed = new Typed(".typing", {
        strings: [ "Web Developer "+ "<img src='img/skills/html5.svg' width='30px'>"+ " <img src='img/skills/css3.svg' width='30px'>"+ " <img src='img/skills/js.svg' width='30px'>",
        "Developer "+ "<img src='img/skills/python.svg' width='30px'>"+ " <img src='img/skills/java.svg' width='30px'>"+ " <img src='img/skills/android_studio.png' width='30px'>"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});

//Portfolio Gallery
const filterBtn = document.querySelector("#filterBtn").children;
const item = document.querySelector(".gallery").children;

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");
    for (let k = 0; k < item.length; k++) {
      item[k].style.display = "none";
      if (target == item[k].getAttribute("data-id")) {
        item[k].style.display = "block";
      }
      if (target == "all") {
        item[k].style.display = "block";
      }
    }
  });
}
