let btnnav = document.getElementById("btnnav")
btnnav.addEventListener("click",clicker)

function clicker(){
    let i = document.querySelector("#btnnav i") 

    if (i.classList.contains("fa-bars")){
        i.classList.remove("fa-bars")
        i.classList.add("fa-x")
    }else {
        i.classList.add("fa-bars")
        i.classList.remove("fa-x")
    }
}

let secul = document.getElementById("secul")
let use1 = document.querySelector("#secul li a")

if (localStorage.getItem("User")){
    secul.style.setProperty("display", "block", "important");
    use1.innerHTML = localStorage.getItem("User")
}
let choosenpro = localStorage.getItem("choosen")
let readychoosen = JSON.parse(choosenpro)
let proshow = document.getElementById("proshow")
let emptyshow = document.getElementById("emptyshow")

if(choosenpro){

    emptyshow.style.setProperty("display", "none", "important")

    readychoosen.forEach( function (item){
    proshow.innerHTML += `
    <div class="col-xl-4 col-lg-6 col-12 mb-5">
        <div class="card">
            <img src=".${item.url}" alt="pro-1" class="card-img-top rounded-3">
                <div class="card-body">
                    <h2 class="card-title display-4 fw-semibold">${item.title}</h2>
                    <p class="card-text">${item.disc}</p>
                    <a href="#" class="btn btn-dark d-block fs-5 fw-semibold" onclick="removeele(event,${item.id})">Remove From Cart</a>
                </div>
        </div>
    </div>

    `
})
}

let out = document.getElementById("out")

out.addEventListener("click", function(e) {
    e.preventDefault()

    localStorage.clear()
    location.assign("../index.html")
})


let numon = document.getElementById("numon")
let choosenproducts = localStorage.getItem("choosen") ? JSON.parse(localStorage.getItem("choosen")) : []

if (choosenproducts){
    numon.innerHTML = choosenproducts.length
    if(choosenproducts.length > 0){
        numon.style.setProperty("display","inline-block","important")
    }
}

function removeele(event, idd){
    event.preventDefault()
    let index = readychoosen.findIndex((ele) => ele.id == idd)
    if (index !== -1){
        readychoosen.splice(index,1)
        localStorage.setItem("choosen",JSON.stringify(readychoosen))

        proshow.innerHTML = ""
        readychoosen.forEach(function (item){
            proshow.innerHTML += `
            <div class="col-xl-4 col-lg-6 col-12 mb-5">
                <div class="card">
                    <img src=".${item.url}" alt="pro-1" class="card-img-top rounded-3">
                        <div class="card-body">
                            <h2 class="card-title display-4 fw-semibold">${item.title}</h2>
                            <p class="card-text">${item.disc}</p>
                            <a href="#" class="btn btn-dark d-block fs-5 fw-semibold" onclick="removeele(event,${item.id})">Remove From Cart</a>
                        </div>
                </div>
            </div>
        
            `
        })
    }
    numon.innerHTML = readychoosen.length;
    
    if (readychoosen.length === 0) {
        location.reload()

        numon.style.setProperty("display", "none", "important");
    }
}
if (readychoosen.length === 0){
    emptyshow.style.setProperty("display", "block", "important")
        emptyshow.innerHTML = `
    <div class="col-12 fs-3 fw-bold bg-white text-dark rounded-1 px-2 py-3 position-absolute top-50 start-50 translate-middle text-center">Your Cart Is Empty.</div>
    `
}