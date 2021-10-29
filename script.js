import navbar from "./components/navbar.js";
import Footer from "./components/footer.js"

const navbarElement = document.getElementById('navbar');
navbarElement.innerHTML = navbar()

const footers = Footer();
const container = document.getElementById('footer');
container.innerHTML = footers;


