
// Detecting Button Press

let numberOfDreamButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDreamButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);        

    });
}


// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

    const canPressKeys = ["w", "a", "s", "d", "j", "k", "l"];

    if (canPressKeys.includes(event.key)){

        makeSound(event.key);
    
        buttonAnimation(event.key);

    }

});

function makeSound(key) {

    switch (key) {

        case "w":
            let tom1 = new Audio("https://tickkun-devsearch-bucket.s3.ap-northeast-1.amazonaws.com/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("https://tickkun-devsearch-bucket.s3.ap-northeast-1.amazonaws.com/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("https://tickkun-devsearch-bucket.s3.ap-northeast-1.amazonaws.com/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("https://tickkun-devsearch-bucket.s3.ap-northeast-1.amazonaws.com/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("https://tickkun-devsearch-bucket.s3.ap-northeast-1.amazonaws.com/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("https://tickkun-devsearch-bucket.s3.ap-northeast-1.amazonaws.com/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("https://tickkun-devsearch-bucket.s3.ap-northeast-1.amazonaws.com/kick-bass.mp3");
            kick.play();
            break;
            
        default:
            break;
    }
    
}

function buttonAnimation(currentKey) {
    
        console.log("ok");

        let activeButton = document.querySelector("." + currentKey);

         activeButton.classList.add("pressed");

         setTimeout(function () {
             activeButton.classList.remove("pressed");
         }, 100);

}
