// document.querySelector(".w").addEventListener("click",f1);
// document.querySelector(".a").addEventListener("click",f1);
// document.querySelector(".s").addEventListener("click",f1);
// document.querySelector(".d").addEventListener("click",f1);
// document.querySelector(".j").addEventListener("click",f1);
// document.querySelector(".k").addEventListener("click",f1);
// document.querySelector(".l").addEventListener("click",f1);
for(var i =0; i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",f1);
  document.querySelectorAll(".drum")[i].addEventListener("click",f3);

}
//mouse click sound
function f1()
{
  var btn = this.innerHTML;
  switch (btn) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    default:

  }
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
}
document.addEventListener('keypress', f2);
document.addEventListener('keypress', f3);
//animation
function f3(event){
  var btnPress = event.key;
  //btn was pressed
  if(typeof btnPress === 'string'){
    document.querySelector("."+btnPress).classList.add("pressed");
    setTimeout(function(){    document.querySelector("."+btnPress).classList.remove("pressed")
}, 500);

}
//mouse was press
else{
  var btnPress =this.innerHTML;
  document.querySelector("."+btnPress).classList.add("pressed");
  setTimeout(function(){    document.querySelector("."+btnPress).classList.remove("pressed")
}, 500);

}
}

function f4(btn)
{

}


//keypress sound
function f2(event)
{
  var pressKey = event.key;

  switch (pressKey) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    default:

  }

}
