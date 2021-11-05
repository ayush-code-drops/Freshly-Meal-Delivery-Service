import Navbar from "../components/nav1.js";

const navbar = Navbar();
const container = document.getElementById("nav");
container.innerHTML = navbar;

const accordion =document.getElementsByClassName('contentBx');

        for(let i=0;i<accordion.length;i++){
            accordion[i].addEventListener('click',function(){
                this.classList.toggle('active');
            })
        }

var cont = document.getElementById("scroll")
var show = document.getElementById("update")

var day = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"]

function createCard() {

    let dayCount = 0

    for (let i = 16; i < 29; i++) {
        let card = document.createElement("div")
        card.textContent = `${day[dayCount++]}, Nov ${i}`
        cont.appendChild(card)
        if (dayCount === 7 ) {
            dayCount = 0
        }
        card.addEventListener('click', function() {
            show.textContent = card.innerHTML

            let indicator = document.createElement("div")
            card.appendChild(indicator)
        })
    }
}


createCard()