function addSoundEvent(buttonInnerHTML){
    switch (buttonInnerHTML) {
        case "w":
                var audioElement = new Audio("./sounds/tom-1.mp3");
                audioElement.play();
            break;
        
        case "a":
                var audioElement = new Audio("./sounds/tom-2.mp3");
                audioElement.play();
            break;

        case "s":
                var audioElement = new Audio("./sounds/tom-3.mp3");
                audioElement.play();
            break;
        
        case "d":
                var audioElement = new Audio("./sounds/tom-4.mp3");
                audioElement.play();
            break;

        case "j":
                var audioElement = new Audio("./sounds/snare.mp3");
                audioElement.play();
            break;

        case "k":
                var audioElement = new Audio("./sounds/crash.mp3");
                audioElement.play();
            break;
        
        case "l":
                var audioElement = new Audio("./sounds/kick-bass.mp3");
                audioElement.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

var buttons = document.querySelectorAll("button");
var countButtons = document.querySelectorAll("button").length;

for(var i = 0; i < countButtons; i++){
   
    buttons[i].addEventListener("click", function (){
        
        var buttonInnerHTML = this.innerHTML;
        addSoundEvent(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keydown", function(event){
    var key = event.key;
    addSoundEvent(key);
    buttonAnimation(key);
})

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}