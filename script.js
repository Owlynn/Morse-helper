let keyboard = {
    alphabet : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    createKeyboard() {
        for(i = 0 ; i< keyboard.alphabet.length ; i++) {
            let singleKey = document.createElement("div");
            document.getElementById('alphabet').appendChild(singleKey);
            singleKey.classList.add("keyboard-letters");
            singleKey.innerHTML= keyboard.alphabet[i];
            singleKey.addEventListener("click", visualMorse.displayMorseLetter);
        }
        
    }
}


let visualMorse = {
    morseAlphabet : ["._","_...","_._.","_..",".",".._.","__.","....","..",".___","_._","._..","__","_.","___",".__.","__._","._.","...","_",".._","..._",".__","_.._","_.__","__.."],
    displayMorseLetter(event){
        console.log("displayletter");
        console.log(event.target.innerHTML);
        let letterDisplayed = document.createElement('div');
        document.querySelector(".display-letter").appendChild(letterDisplayed);
        letterDisplayed.classList.add("letter-displayed");
        letterDisplayed.innerHTML = event.target.innerHTML;
    }
};

let app = {
    init(){
        keyboard.createKeyboard();
    }
};

app.init();