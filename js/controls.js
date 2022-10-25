export default function Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop
}) {
    
    function reset() {
        btnPlay.classList.remove("hide")
        btnPause.classList.add("hide")
        btnSet.classList.remove("hide")
        btnStop.classList.add("hide")    
    }

    function play() {
        btnPlay.classList.add("hide")
        btnPause.classList.remove("hide")
        btnSet.classList.add("hide")
        btnStop.classList.remove("hide")
    }

    function pause() {
        btnPause.classList.add("hide")
        btnPlay.classList.remove("hide")
    }
    
    function getMinutes() {
        let newMinutes = prompt("Quantos minutos?")
        if(!newMinutes) {
            return false
        }
        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}
