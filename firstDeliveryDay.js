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