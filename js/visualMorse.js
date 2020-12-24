let visualMorse = {
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