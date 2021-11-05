import { navbar } from "../components/navbar.js";
import Footer from "../components/footer.js";


const navbarElement = document.getElementById('navbar');

navbarElement.innerHTML=navbar()

const footers = Footer();
const container = document.getElementById('footer');
container.innerHTML = footers;
const accordion =document.getElementsByClassName('contentBx');

for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}
