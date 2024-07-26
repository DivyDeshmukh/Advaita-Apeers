
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
    alert("Hey there! Divy this side, please check out this amazing landing page designed by me. It showcase the ancient culture and wisdom of our Bharat. There are several features i want you to take into consideration in menu like the knowledge section, architecture section, foods, and you can also play games in the games section. Overall, I have designed this project for practice and uploaded it on my github profile. You can provide your valuable feedback by email. Have a play around with different features of the site. Please read the article on knowledge section. THANKYOU FOR VISITING...");
  });
  
  document.querySelector("#mobile #contact").addEventListener("click", function() {
    alert("You can contact us at: Email Id: divydeshmukh1104@gmail.com");
  });
  
  document.getElementsByTagName("h4")[1].addEventListener("click", function() {
    alert("Hey there! Divy this side, please check out this amazing landing page designed by me. It showcase the ancient culture and wisdom of our Bharat.  Please read the article on knowledge section. There are several features i want you to take into consideration in menu like the knowledge section, architecture section, foods, and you can also play games in the games section. Overall, I have designed this project for practice and uploaded it on my github profile. You can provide your valuable feedback by email. Have a play around with different features of the site. THANKYOU FOR VISITING...");
  });
  
  document.getElementsByTagName("h4")[2].addEventListener("click", function() {
    alert("You can contact us at: Email Id: divydeshmukh1104@gmail.com");
  });

var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
    });
}


document.addEventListener("keypress", function(event) {
    makeSound(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
        break;   

        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
        break;

        default: console.log(buttonInnerHTML);

    }
}


