import Navbar from"../components/navbar.js"
import footer from"../components/footer.js"

const navbarElement = document.getElementById('navbar');
navbarElement.innerHTML = Navbar();

const footerElement = document.getElementById('footer');
footerElement.innerHTML = footer();

const accordion =document.getElementsByClassName('contentBx');

for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}
