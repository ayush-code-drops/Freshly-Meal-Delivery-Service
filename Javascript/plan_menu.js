import {navbar} from "../components/navbar.js";
import Footer from "../components/footer.js";

// Navbar
const navbarElement = document.getElementById('navbar');
navbarElement.innerHTML=navbar();

// Footer
const footers = Footer();
const containers = document.getElementById('footer');
containers.innerHTML = footers;


listData();
async function listData(){
    const data = await fetch(`http://localhost:3000/posts`);
    const list = await data.json();
    apidata(list)
}


function apidata(d){
    const data = document.getElementById("container");
      data.innerText = null;
    d.forEach(({title,img }) => {
        
            let div = document.createElement('div')

            let container = document.createElement('div');
            div.classList.add("anotherclass")
             let image = document.createElement('img');
             image.src = img;
             image.style.width = "250px";
             image.style.height = "250px";

             let h2 = document.createElement("h3");
             h2.textContent = title;
              
         
                
              div.style.marginTop = "30px";
              
             div.style.gridGap="20px";
             container.append(image,h2);
             div.append(container);
             
          
             
            data.append(div);
        
       
       
    });
}