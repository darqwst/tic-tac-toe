var counter = 0
var cells = document.querySelectorAll('#field td')
var header = document.getElementById('main-header')
var xScore = 0;
var oScore = 0;


function isEnder() {
    if (counter < 4) {
        return false
    }
    if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != '') {
        return true
    }
    if (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != '') {
        return true
    }
    if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != '') {
        return true
    }
    if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != '') {
        return true
    }
    if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != '') {
        return true
    }
    if (counter > 7) {
        header.innerHTML = 'Draw!'
        return false
    }
}

function cellClick() {
    var img = document.createElement('img')
    img.style.width = '75%';
    if (counter % 2 == 0) {
        img.src = 'close.png'
    }
    else {
        img.src = 'circle.png'
    }
    this.appendChild(img)
    if (isEnder()) {
        for (var cell of cells) {
            cell.removeEventListener('click', cellClick)
        }
    if (counter % 2 == 0) {
        header.innerHTML = 'X is winner!';
        xScore++;
    } else {
        header.innerHTML = 'O is winner!';
        oScore++;
    }
    document.querySelector("h2").textContent = "X winner - " + xScore;
    document.querySelector("h3").textContent = "O winner - " + oScore;
    }
    counter += 1
    this.removeEventListener('click', cellClick)
}

function startGame() {
    counter = 0
    header.innerHTML = 'Tic Tac Toe'
    for (var cell of cells) {
        cell.innerHTML = ''
        cell.addEventListener('click', cellClick)
    }
}
