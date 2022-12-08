let home= 0
let guest= 0

let homeBox = document.getElementById("home-box")
let guestBox = document.getElementById("guest-box")

//Home button functions add1(), Add2(), Add3()
function homeAdd1() {
     home += 1
    homeBox.innerText = home
}
function homeAdd2() {
     home += 2
   homeBox.innerText = home
}
function homeAdd3() {
     home += 3
    homeBox.innerText = home
}

//Guest button functions add1(), Add2(), Add3()

function guestAdd1() {
     guest += 1
    guestBox.innerText = guest
}

function guestAdd2() {
     guest += 2
    guestBox.innerText = guest
}

function guestAdd3() {
     guest += 3
    guestBox.innerText = guest
}

