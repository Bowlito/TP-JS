const voiture = document.getElementById('voiture')


voiture.style.gridColumnStart = 1
voiture.style.gridColumnEnd = 1
voiture.style.gridRowStart = 1
voiture.style.gridRowEnd = 1



function moveRight() {

    if (voiture.style.gridColumnStart < 9 && (voiture.style.gridRowStart == 1 || voiture.style.gridRowStart == 5 || voiture.style.gridRowStart == 9)) {
        voiture.style.gridColumnStart++
        voiture.style.gridColumnEnd++
    }


}

function moveLeft() {
    if (voiture.style.gridColumnEnd > 0 && (voiture.style.gridRowStart == 1 || voiture.style.gridRowStart == 5 || voiture.style.gridRowStart == 9)) {
        voiture.style.gridColumnStart--
        voiture.style.gridColumnEnd--
    }

}

function moveBottom() {
    if (voiture.style.gridRowStart < 9 && (voiture.style.gridColumnStart == 1 || voiture.style.gridColumnStart == 5 || voiture.style.gridColumnStart == 9)) {
        voiture.style.gridRowStart++
        voiture.style.gridRowEnd++
    }

}

function moveTop() {
    if (voiture.style.gridRowStart > 0 && (voiture.style.gridColumnStart == 1 || voiture.style.gridColumnStart == 5 || voiture.style.gridColumnStart == 9)) {
        voiture.style.gridRowStart--
        voiture.style.gridRowEnd--
    }
}



