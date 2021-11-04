import navbar from "./components/navbar.js";
import Footer from "./components/footer.js"

const navbarElement = document.getElementById('navbar');
navbarElement.innerHTML = navbar()

const footers = Footer();
const container = document.getElementById('footer');
container.innerHTML = footers;




//  // sign 
//  function sign() {
//     location.replace("sign.html");
// }

// const view_plan = document.getElementById('view_plan');
// view_plan.addEventListener('click', explore);
// //    const explore_meal = document.getElementById("explore_meal");
// //    explore_meal.addEventListener('click',explore);

// function explore() {
//     location.replace('plan_menu.html');
// }
// const nextbtn = document.getElementById("next");
// nextbtn.addEventListener("click", next_slide);

// const previousbtn = document.getElementById("previous");
// previousbtn.addEventListener("click", previous_slide);

// const data = document.getElementById("data_slideShow");
// slide1();

// function slide1() {
//     const div1 = document.createElement('div');
//     const div2 = document.createElement('div');
//     const div3 = document.createElement('div');
//     div1.className = "text1";
//     div2.className = "text2";
//     div3.className = "text3";

//     const img1 = document.createElement('img');
//     img1.src = "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg";
//     img1.style.width = "200px";
//     img1.style.height = "100px";

//     const h1 = document.createElement('h3');
//     h1.innerHTML = "Freshly has changed our lives!";
//     const p1 = document.createElement('p');
//     p1.innerHTML = " With Freshly, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it."
//     const name1 = document.createElement('h4');
//     name1.innerHTML = "Dave";
//     div1.append(img1, h1, p1, name1);

//     const img2 = document.createElement('img');
//     img2.src = "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg";
//     img2.style.width = "200px";
//     img2.style.height = "100px";

//     const h2 = document.createElement('h2');
//     h2.innerHTML = "10 stars! Awesome! Love it! ";
//     const p2 = document.createElement('p');
//     p2.innerHTML = " We love Freshly because it takes two minutes to prepare, the food is great and we don’t have to spend time cleaning up."
//     const name2 = document.createElement('h4');
//     name2.innerHTML = "Sheri";
//     div2.append(img2, h2, p2, name2);


//     const img3 = document.createElement('img');
//     img3.src = "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg";
//     img3.style.width = "200px";
//     img3.style.height = "100px";

//     const h3 = document.createElement('h2');
//     h3.innerHTML = "One of the easiest decisions I've made ";
//     const p3 = document.createElement('p');
//     p3.innerHTML = "With Freshly, I don’t have to think about what I’m going to eat for lunch each day and feel good knowing that I’m eating a healthy meal. I love the convenience!"
//     const name3 = document.createElement('h4');
//     name3.innerHTML = "Cindi";
//     div3.append(img3, h3, p3, name3);

//     data.append(div1, div2, div3);
// }


// function slide2() {
//     const div1 = document.createElement('div');
//     const div2 = document.createElement('div');
//     const div3 = document.createElement('div');
//     div1.className = "text1";
//     div2.className = "text2";
//     div3.className = "text3";

//     const img1 = document.createElement('img');
//     img1.src = "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg";
//     img1.style.width = "200px";
//     img1.style.height = "100px";

//     const h1 = document.createElement('h3');
//     h1.innerHTML = "Amazingly delicious and convenient!";
//     const p1 = document.createElement('p');
//     p1.innerHTML = "I love that I have found freshly and that it allows me to try new things and allows me to eat healthy while remaining affordable!"
//     const name1 = document.createElement('h4');
//     name1.innerHTML = "Jessica Wilson";
//     div1.append(img1, h1, p1, name1);

//     const img2 = document.createElement('img');
//     img2.src = "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg";
//     img2.style.width = "200px";
//     img2.style.height = "100px";

//     const h2 = document.createElement('h2');
//     h2.innerHTML = "Convenience, taste, variety";
//     const p2 = document.createElement('p');
//     p2.innerHTML = "Been a customer for more than a year now, and love it. Customer service is particularly outstanding — whenever there’s been a problem, Freshly staff respond quickly and always rectify the problem."
//     const name2 = document.createElement('h4');
//     name2.innerHTML = "Jeffrey";
//     div2.append(img2, h2, p2, name2);


//     const img3 = document.createElement('img');
//     img3.src = "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg";
//     img3.style.width = "200px";
//     img3.style.height = "100px";

//     const h3 = document.createElement('h2');
//     h3.innerHTML = "Delicious! So yummy!";
//     const p3 = document.createElement('p');
//     p3.innerHTML = "The convenience of a well prepared, healthy, flavorful meal with no shopping, preparing, or clean up is simply amazing. Looking forward to the rest of the week.";
//     const name3 = document.createElement('h4');
//     name3.innerHTML = "Kristie Geiges";
//     div3.append(img3, h3, p3, name3);

//     data.append(div1, div2, div3);
// }

// let count = 1;
// function next_slide() {
//     data.innerHTML = "";
//     if (count % 2 != 0) {
//         count++;
//         slide2();
//     }
//     else {
//         count++;
//         slide1();
//     }
// }

// function previous_slide() {
//     data.innerHTML = "";
//     if (count % 2 == 0) {
//         count++;
//         slide2();
//     }
//     else {
//         count++;
//         slide1();
//     }
// }