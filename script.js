let keyboard = {
    alphabet : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    createKeyboard() {
        for(i = 0 ; i< keyboard.alphabet.length ; i++) {
            let singleKey = document.createElement("div");
            document.getElementById('alphabet').appendChild(singleKey);
            singleKey.classList.add("keyboard-letters");
            singleKey.innerHTML= keyboard.alphabet[i];
            singleKey.addEventListener("click", visualMorse.displayLetter);
        }
        
    }
};
let visualMorse = {
    // currentLetter : null, 
    // currentPlayer : null, 
    // newLetter : null, 
    // newPlayer : null,
    
    morseAlphabet : ["._","_...","_._.","_..",".",".._.","__.","....","..",".___","_._","._..","__","_.","___",".__.","__._","._.","...","_",".._","..._",".__","_.._","_.__","__.."],
    letterDisplayed : document.createElement('div'),
    morseDisplayed : document.createElement('div'),
    
    displayLetter(event){
        
        document.querySelector(".display-letter").innerHTML = "";
        visualMorse.letterDisplayed = document.createElement('div');
        document.querySelector(".display-letter").appendChild(visualMorse.letterDisplayed);
        visualMorse.letterDisplayed.classList.add("letter-displayed");
        visualMorse.letterDisplayed.innerHTML = event.target.innerHTML;
        
        visualMorse.morseDisplayed = document.createElement('div');
        document.querySelector(".display-letter").appendChild(visualMorse.morseDisplayed);
        visualMorse.morseDisplayed.classList.add("visual-morse-displayed");
        let index = keyboard.alphabet.findIndex(letter => letter === event.target.innerHTML);
        visualMorse.morseDisplayed.innerHTML = visualMorse.morseAlphabet[index].split('').join(' ');
        
        audioMorse.combineSounds();
    }
};
let audioMorse = {
    long : document.getElementById("long"),
    short : document.getElementById("short"),
    combineSounds(){
        audioMorse.short.currentTime = 0;
        audioMorse.long.currentTime = 0;
        console.log("combine");
        let splittedMorse = visualMorse.morseDisplayed.innerHTML.split(' ');
        console.log(splittedMorse[0]);
        if (splittedMorse[0] == '.') {
            audioMorse.short.play();
        }else{
            audioMorse.long.play();
        }
    }
};

let app = {
    init(){
        keyboard.createKeyboard();
    }
};



document.addEventListener('DOMContentLoaded', app.init);