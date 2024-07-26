gsap.from("#nav h1, #nav1 img, #nav h4, #content h1, #content p, #nav i", {
    y:-100,
    duration: 2,
    delay: 0.6,
    stagger: 0.2,
    opacity: 0
})

gsap.to("#main #h5", {
    y:20,
    repeat: -1,
    yoyo: true,
    duration: 0.7,
});

document.querySelector("#mobile #about").addEventListener("click", function() {
  alert("Hey there! Divy this side, please check out this amazing landing page designed by me. It showcase the ancient culture and wisdom of our Bharat. There are several feautures i want you to take into consideration in menu like the knowledge section, architecture section, foods, and you can also play games in the games section. Have a play around with different features of the site. THANKYOU FOR VISITING...");
});

document.querySelector("#mobile #contact").addEventListener("click", function() {
  alert("You can contact us at: Email Id: divydeshmukh1104@gmail.com");
});

document.getElementsByTagName("h4")[1].addEventListener("click", function() {
  alert("Hey there! Divy this side, please check out this amazing landing page designed by me. It showcase the ancient culture and wisdom of our Bharat. There are several feautures i want you to take into consideration in menu like the knowledge section, architecture section, foods, and you can also play games in the games section. Overall, I have designed this project for practice and uploaded it on my github profile. You can provide your valuable feedback by email. Have a play around with different features of the site. THANKYOU FOR VISITING...");
});

document.getElementsByTagName("h4")[2].addEventListener("click", function() {
  alert("You can contact us at: Email Id: divydeshmukh1104@gmail.com");
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


var n = Math.random() * 6;
n = Math.floor(n) + 1;

var m =  Math.random() * 6;
m = Math.floor(m) + 1;
var image1 = "dice" + n + ".png";
var image2 = "dice" + m + ".png";

document.querySelector(".img1").setAttribute("src", image1); 
document.querySelector(".img2").setAttribute("src", image2); 

if (n > m) {
    document.querySelector(".container > h1").innerHTML = "Player1 Wins!";
}

else if (m > n) {
    document.querySelector(".container > h1").innerHTML = "Player2 Wins!";
}

else {
    document.querySelector(".container > h1").innerHTML = "Draw!";
}
