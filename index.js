var count = 0

let countEL = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEL.innerText = count
    console.log(count)
}

function save(){
    let tmp = " " + count + " -"
    saveEl.innerText += tmp
    countEL.innerText = 0
    count = 0
}

var names = "Ankit"
var greeting = "Hi, my name is "
welcomeEl.innerText = greeting + names

welcomeEl.innerText += " 😁"



