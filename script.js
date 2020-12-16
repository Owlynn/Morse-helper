let keyboard = {
    alphabet : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    createKey () {
        for(i = 0 ; i< keyboard.alphabet.length ; i++) {
            let singleKey = document.createElement("div");
            document.getElementById('alphabet').appendChild(singleKey);
            singleKey.classList.add("keyboard-letter");
            singleKey.innerHTML= keyboard.alphabet[i];
        }
      
    }
}

keyboard.createKey();