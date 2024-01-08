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
let readychoosen2 = JSON.parse(choosenpro)
let readychoosen = Array.from(new Set(readychoosen2.map(JSON.stringify))).map(JSON.parse);
let proshow = document.getElementById("proshow")
let emptyshow = document.getElementById("emptyshow")



if(choosenpro){

    emptyshow.style.setProperty("display", "none", "important")

    readychoosen.forEach( function (item){

    
        let count = readychoosen2.filter((ele)=> ele.id === item.id)


        proshow.innerHTML += `
        <div class="card card-shadow mb-3 ps-0 pe-0 position-relative cardmg">
            <div class="row g-0">
                <div class="col-lg-4">
                    <img src=".${item.url}" class="img-fluid rounded-start ms-0 ps-0" alt="...">
                </div>
                <div class="col-lg-8">
                    <div class="card-body">
                        <h2 class="card-title mt-2 fw-bold fs-1">${item.title}</h2>
                        <p class="card-text w-50 fs-5 mt-2">${item.disc}</p>
                        <p class="card-text fw-bold fs-5 cardpos" id ="onremove"> <i class="fa-solid fa-plus text-success me-2 px-3 py-2" onclick=incrementCount(${item.id})></i> <span id="flex${item.id}"> ${count.length} </span> <i class="fa-solid fa-minus text-danger ms-2 px-3 py-2" onclick=decrementCount(${item.id})></i> </p>
                        <div class="cardpos" id="ainpro"><a href="#" class="btn btn-dark fs-5 fw-semibold d-block w-100" onclick="removeele(event,${item.id})">Remove From Cart</a></div>
                    </div>
                </div>
            </div>
        </div>
`       })



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

        readychoosen2 = readychoosen2.filter((ele) => ele.id !== idd);

        localStorage.setItem("choosen",JSON.stringify(readychoosen2))

        proshow.innerHTML = ""
        readychoosen.forEach(function (item){

            let count = readychoosen2.filter((ele)=> ele.id === item.id)

            
            proshow.innerHTML += `
            <div class="card card-shadow mb-3 ps-0 pe-0 position-relative cardmg">
                <div class="row g-0">
                    <div class="col-lg-4">
                        <img src=".${item.url}" class="img-fluid rounded-start ms-0 ps-0" alt="...">
                    </div>
                    <div class="col-lg-8">
                        <div class="card-body">
                            <h2 class="card-title mt-2 fw-bold fs-1">${item.title}</h2>
                            <p class="card-text w-50 fs-5 mt-2">${item.disc}</p>
                            <p class="card-text fw-bold fs-5 cardpos" id ="onremove"> <i class="fa-solid fa-plus text-success me-2 px-3 py-2" onclick=incrementCount(${item.id})></i> <span id="flex${item.id}"> ${count.length} </span> <i class="fa-solid fa-minus text-danger ms-2 px-3 py-2" onclick=decrementCount(${item.id})></i> </p>
                            <div class="cardpos" id="ainpro"><a href="#" class="btn btn-dark fs-5 fw-semibold d-block w-100" onclick="removeele(event,${item.id})">Remove From Cart</a></div>
                        </div>
                    </div>
                </div>
            </div>
    `
        })

    }
    numon.innerHTML = readychoosen2.length;
    
    if (readychoosen.length === 0) {
        location.reload()

        numon.style.setProperty("display", "none", "important");
    }
}


if (readychoosen.length === 0){
    emptyshow.style.setProperty("display", "block", "important")
        emptyshow.innerHTML = `
    <div class="col-12 fs-3 fw-bold bg-white text-dark rounded-1 px-2 py-3 position-absolute top-50 start-50 translate-middle text-center cardmg">Your Cart Is Empty.</div>
    `
}





function incrementCount(idd) {
    
    let dblethis = readychoosen2.find((ele)=> ele.id == idd)

    if (dblethis){
        readychoosen2.push(dblethis)
        localStorage.setItem("choosen",JSON.stringify(readychoosen2))
        numon.innerHTML = readychoosen2.length;

        let flexid = document.getElementById(`flex${idd}`)
        
        flexid.innerHTML = Number(flexid.innerText) + 1
        


    }
}

function decrementCount(idd) {
    let delthis = readychoosen2.findIndex((ele)=> ele.id === idd)

    if (delthis != -1){
        readychoosen2.splice(delthis,1)
        localStorage.setItem("choosen",JSON.stringify(readychoosen2))

        readychoosen = Array.from(new Set(readychoosen2.map(JSON.stringify))).map(JSON.parse);
        choosenproducts = localStorage.getItem("choosen") ? JSON.parse(localStorage.getItem("choosen")) : []


    }
    numon.innerHTML = readychoosen2.length;
    

    if (readychoosen.length === 0) {
        location.reload()

        numon.style.setProperty("display", "none", "important");
    }

    const flexid = document.getElementById(`flex${idd}`)

    flexid.innerHTML = flexid.innerText - 1

    if ( flexid.innerHTML == 0 ){
    const productDiv = flexid.closest(".cardmg");
        if (productDiv) {
            productDiv.remove();
        }
    }


}