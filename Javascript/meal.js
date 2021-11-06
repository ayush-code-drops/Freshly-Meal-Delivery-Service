const scrollMenu = document.getElementById('scroll-menu');

function getFoodItems() {
    return fetch('http://localhost:3000/posts')
        .then((response) => response.json())
        .then(
            (data) => {
                console.log(data)
                const foodCont = document.createElement('div')
                foodCont.className="food-container"
                for (items of data) {
                    const card = createFoodCard(items)
                    foodCont.append(card)

                }
                scrollMenu.append(foodCont)
              
                 
        }
    )
}
getFoodItems()

// function createFoodCard(data) {
//     const div = document.createElement('div');
//     div.className = "food-card";
//     div.innerHTML = `
//     <div id="food-img-cont">
//     <img src="${data.img}" height="170px" width="180px"><img>
//     <h3 id="food-namehead">${data.title}</h3>
//     <p id="food-phead">${data.description}</p>

//     <div id="specs-col">
//     <p class="specs-cals">Calls:${data.cals}<p>
//     <button class="btn btn-primary" id="add-btn">Add</button>
//     </div>
//     </div>
    
//    `
//     return div

    
// }

function createFoodCard(data) {
    const div = document.createElement('div');
    div.className = "food-card";
    const imgCont = document.createElement('div')
    imgCont.className = "food-img-cont"
    const img = document.createElement('img');
    img.src = data.img;
    img.style.height="170px"
    img.style.width = "180px"
    imgCont.append(img);
    const h4 = document.createElement('h4');
    h4.className = 'food-card-head';
    h4.innerHTML = data.title
    
    const p = document.createElement('p');
    p.className = "food-card-p";
    p.innerHTML=data.description

    const specs = document.createElement('div');
    specs.className = "specs-col";
    const cal = document.createElement('p');
    cal.className = "specs-cal";
    cal.innerHTML=`Cals:${data.cals}`
    const addBtn = document.createElement('button');
    addBtn.className = "specs-btn";
    addBtn.textContent = 'Add'

    addBtn.addEventListener('click', ()=>{
        const cart = document.getElementById('meal-cart');
        const cartDiv = document.createElement('div');
        cartDiv.style.marginTop = '5px';
        cart.style.paddingBottom = '15px';
        cartDiv.setAttribute('id', 'cart-div');
        const cartImg = document.createElement('img');
        cartImg.src = data.img
        cartImg.style.height = '64px';
        cartImg.style.width = '64px';
        const h5 = document.createElement('h5');
        h5.innerHTML = data.title;
        const addRem = document.createElement('div');
        const addele = document.createElement('div');
        addele.innerHTML = `
        <i class='bx bx-plus' id='plus-btn'></i>
        `
        const removeEle = document.createElement('div')
        removeEle.innerHTML = `
        <i class='bx bx-minus' id='minus-btn'></i>
        `

        addRem.append(addele, removeEle);
        cartDiv.append(cartImg, h5, addRem);

        cart.append(cartDiv)

        removeEle.addEventListener('click', () => {
            cartDiv.innerHTML=''
        })

        addele.addEventListener('click', () => {
            
        })
        // cart.innerHTML +=
        //     `
        //     <div id="cart-div">
        //     <img src='${data.img}' height='64px' width='64px'></img>
        //     <h5 id="cart-h5">
        //     ${data.title}
        //     </h5>

        //     <div id="add-remove">
        //     <i class='bx bx-plus' id='plus-btn'></i>
        //     <i class='bx bx-minus' id='minus-btn'></i>
        //     </div>
        //     </div>
        //     <hr></hr>
        //     `
    })  
    specs.append(cal,addBtn)
    
    div.append(imgCont, h4, p, specs)
    

    return div
}

const clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', (e) => {
  
    const mealCart = document.getElementById('meal-cart');
    
    mealCart.innerHTML=''

})



