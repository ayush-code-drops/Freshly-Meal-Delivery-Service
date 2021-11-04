import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

// Navbar
const navbar = Navbar();
const container = document.getElementById("navbar");
container.innerHTML = navbar;

// Footer
const footers = Footer();
const containers = document.getElementById('footer');
containers.innerHTML = footers;

const searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click",api);
listData();
async function listData(){
    const data = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=72764027&app_key=b8e7d3a96ef61212ef923eb84da1d7b7&ingr=freshly&nutrition-type=cooking`);
    const list = await data.json();
    apidata(list.hints)
}

async function api(){
    const input = document.getElementById("searchApi").value;
    const data = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=72764027&app_key=b8e7d3a96ef61212ef923eb84da1d7b7&ingr=${input}&nutrition-type=cooking`);
    const list = await data.json();
    apidata(list.hints)
}
function apidata(d){
    console.log(d);
    const data = document.getElementById("container");
      data.innerText = null;
    var i = 0;
    d.forEach(({food }) => {
        
        if(food.image != undefined){
             i++;
            let div = document.createElement('div')

            let container = document.createElement('div');
            div.classList.add("anotherclass")
             let img = document.createElement('img');
             img.src = food.image;
             img.style.width = "300px";
             img.style.height = "300px";

             let h2 = document.createElement("h2");
             h2.textContent = food.label + food.category;
              
             let h4 = document.createElement("h4");
             h4.textContent = "with ENERC_KCAL :"+food.nutrients.ENERC_KCAL;
                
              div.style.marginTop = "30px";
              
             div.style.gridGap="20px";
             container.append(img,h2,h4);
             div.append(container);
             
             const accordion = document.getElementById("accordion");
             if( i >= 12 && i <= 16){
                console.log("one",i);
                accordion.style.marginTop = "550px";
             
            }
            else if ( i >= 16 && i <= 20){
                console.log("two",i);
                accordion.style.marginTop = "800px";
            }
            else if ( i >= 20 && i <= 24){
                console.log("three",i);
                accordion.style.marginTop = "1000px";
            }
            data.append(div);
        }
       
       
    });
}