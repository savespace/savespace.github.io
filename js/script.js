// SCROLL
$(document).on('click', 'a', function(event){
      event.preventDefault();
      $('body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
  });

// ŚLEDZENIE
window.smartlook||(function(d) {
var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
})(document);
smartlook('init', 'aa30c339ce2bc28d259925f3e3b65889026c38db');



// HERO
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

// ACCORDION
$(document).ready(function(){
  $("#sticker").sticky({topSpacing:0});
}); 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}