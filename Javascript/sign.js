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

// Sending Mail and Zip to Local Host


var btn = document.getElementById("continue_sign")

async function sendPost(data) {
    await fetch("http://localhost:3000/comments", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (res) {
            return res.json()
        })
        .then(function () {
            window.location.assign('chooseplan.html');
        })
}

async function handleData() {

    let mail = document.getElementById("email_sign").value
    let zip = document.getElementById("zip_sign").value


    if (!mail && !zip) {
        alert("Enter Valid Details")
    }
    else if (!mail) {
        alert("Enter Your Email")
    }
    else if (!zip) {
        alert("Enter Zip Code")
    }
    else if (zip.length != 5) {
        alert("Enter a Valid Zip Code")
    }
    else {
        const data = await sendPost({ mail, zip })
    }
}


btn.addEventListener('click', handleData)