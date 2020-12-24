let audioMorse = {

    long : document.getElementById("long"),
    short : document.getElementById("short"),

    combineSounds(){
        let splittedMorse = visualMorse.morseDisplayed.innerHTML.split(' ');
        
        let index = 0 ;
        let interval = 200;

        let playMorseCode = setInterval(() => {
            audioMorse.long.pause();
            audioMorse.short.pause();
            audioMorse.long.currentTime = 0;
            audioMorse.short.currentTime = 0;
            
            if (splittedMorse[index] == undefined) {
                clearInterval(playMorseCode);
            }else if (splittedMorse[index] == '_'){
                audioMorse.long.play();
            }else if (splittedMorse[index] == '.') {
                audioMorse.short.play();
            }
            index++
            interval = interval + 200 ;
        }, interval);
    },
};