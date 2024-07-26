
gsap.from("#nav1 h1, #nav1 img, #nav h4, p, #nav i", {
    y:-100,
    duration: 2,
    delay: 0.6,
    stagger: 0.2,
    opacity: 0
});



var flag1 = 0;
var flag2 = 0;

document.querySelector("#nav2 #menu").addEventListener("click", function() {
  if(flag1 == 0) {
    document.querySelector("i ul").style.display = "block";
    flag1 = 1;
  }else{
    document.querySelector("i ul").style.display = "none";
    flag1 = 0;
  }
});

document.querySelector("#mobile").addEventListener("click", function() {
  if(flag2 == 0) {
    document.querySelector("#mobile ul").style.display = "block";
    flag2 = 1;
  }else{
    document.querySelector("#mobile ul").style.display = "none";
    flag2 = 0;
  }
});


document.querySelector("#mobile #about").addEventListener("click", function() {
    alert("Hey there! Divy this side, please check out this amazing project developed by me. It showcase the ancient culture and wisdom of our Bharat. There are several features i want you to take into consideration in menu like the knowledge section, architecture section, foods, and you can also play games in the games section. Please read the article on knowledge section. THANKYOU FOR VISITING...");
  });
  
  document.querySelector("#mobile #contact").addEventListener("click", function() {
    alert("You can contact us at: Email Id: divydeshmukh1104@gmail.com");
  });
  
  document.getElementsByTagName("h4")[1].addEventListener("click", function() {
    alert("Hey there! Divy this side, please check out this amazing project developed by me. It showcase the ancient culture and wisdom of our Bharat.  Please read the article on knowledge section. There are several features i want you to take into consideration in menu like the knowledge section, architecture section, foods, and you can also play games in the games section. THANKYOU FOR VISITING...");
  });
  
  document.getElementsByTagName("h4")[2].addEventListener("click", function() {
    alert("You can contact us at: Email Id: divydeshmukh1104@gmail.com");
  });
