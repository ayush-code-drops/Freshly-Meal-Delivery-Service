import navbar from "./components/navbar.js";
import Footer from "./components/footer.js"

const navbarElement = document.getElementById('navbar');
navbarElement.innerHTML = navbar()

const footers = Footer();
const container = document.getElementById('footer');
container.innerHTML = footers;


const hamber = document.getElementById("hambers");
hamber.addEventListener("click",ham);

function ham(){
    document.getElementById("navbar").classList.toggle("active");
    
}

var across = document.getElementById("across");
across.addEventListener("click",acrossfn);

function acrossfn(){
    location.replace('index.html');
}
