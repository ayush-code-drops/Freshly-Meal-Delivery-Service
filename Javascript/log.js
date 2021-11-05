var btn = document.getElementById("button")

async function getData() {
    await fetch("http://localhost:3000/comments")
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        matchData(res)
    })
}

function matchData(data) {
    let mail = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    let count = 0

    for ( let i = 0; i < data.length; i++ ) {
        if ( mail === data[i].mail && pass === data[i].zip ) {
            window.location.assign('chooseplan.html');
            count++
            break
        }
    }
    if(count === 0) {
        alert("Enter Valid Details")
    }
}

btn.addEventListener('click', getData)