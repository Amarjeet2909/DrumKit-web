var NoOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i=0; i<NoOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
          var ButtonInnerhtml= this.innerHTML;
          makesound(ButtonInnerhtml);
          buttonAnimation(ButtonInnerhtml);
          switch(ButtonInnerHTML){
              case "w":
              var tom1= new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;

              case "a":
              var tom2= new Audio("sounds/tom-2.mp3");
              tom2.play();
              break;
              
              case "s":
              var tom3= new Audio("sounds/tom-3.mp3");
              tom3.play();
              break;

              case "d":
              var tom4= new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;

              case "j":
              var tom5= new Audio("sounds/tom-5.mp3");
              tom5.play();
              break;

              case "k":
              var tom6= new Audio("sounds/tom-6.mp3");
              tom6.play();
              break;

              case "l":
              var tom7= new Audio("sounds/tom-7.mp3");
              tom7.play();
              break;

              default:
              console.log(ButtonInnerhtml);
          }
    } );
}

//Detecting the keyboard press
document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

//To play sound by pressing the particular key from keyboard
function makesound(key)
{
    switch(key){
        case "w":
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        
        case "s":
        var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var tom5= new Audio("sounds/tom-5.mp3");
        tom5.play();
        break;

        case "k":
        var tom6= new Audio("sounds/tom-6.mp3");
        tom6.play();
        break;

        case "l":
        var tom7= new Audio("sounds/tom-7.mp3");
        tom7.play();
        break;

        default:
        console.log(ButtonInnerhtml);
    }
}

//To adding animation to our website
function buttonAnimation(currentKey) {
    var activeButton= document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");
    }, 100);
}