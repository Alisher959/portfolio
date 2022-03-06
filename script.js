window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0)
    })
  
    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll('.navigation a')
  
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      navigation.classList.toggle('active')
    })
  
    navigationItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        menuBtn.classList.remove('active')
        navigation.classList.remove('active')
      })
    })
  
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    })
  
    window.addEventListener('scroll', () => {
      let reveals = document.querySelectorAll('.reveal')
  
      for(let i = 0; i< reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;
  
        if(revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active')
        }
      }
    })
  })
//bot token
var telegram_bot_id = "5010418331:AAFDtKROc-3JPXfP4zsQ5MBj4XYSxgmpReU"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 629821711; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
const circles = document.querySelectorAll('.circle');
circles.forEach(elem =>{
    var dots = elem.getAttribute('data-dots')
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100);
    var rotate = 360/dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
         points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})

new Typed('#typed',{
  strings : ['Front-end developer','Telegram bot creator', 'Python developer'],
  typeSpeed : 90,
  loop : true
});