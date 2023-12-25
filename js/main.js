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


let firul = document.getElementById("firul")
let secul = document.getElementById("secul")
let use1 = document.querySelector("#secul li a")

if (localStorage.getItem("User")){
    firul.remove()
    secul.style.setProperty("display", "block", "important");
    use1.innerHTML = localStorage.getItem("User")
}

let out = document.getElementById("out")

out.addEventListener("click", function(e) {
    e.preventDefault()

    localStorage.clear()
    location.reload()
})

let products = [
    {
        id:1,
        title:"Car",
        url:"./img/1.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:2,
        title:"Race",
        url:"./img/2.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:3,
        title:"X-watch",
        url:"./img/3.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:4,
        title:"X-Phone",
        url:"./img/4.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:5,
        title:"X-Car",
        url:"./img/5.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:6,
        title:"Lap-Top",
        url:"./img/6.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    }
]

let productcontent = document.getElementById("productcontent");

products.forEach(function (item){
    productcontent.innerHTML += `
    <div class="col-xl-4 col-lg-6 col-12 mb-5">
        <div class="card">
            <img src="${item.url}" alt="pro-1" class="card-img-top rounded-3">
                <div class="card-body">
                    <h2 class="card-title display-4 fw-semibold">${item.title}</h2>
                    <p class="card-text">${item.disc}</p>
                    <a href="#" class="btn btn-dark d-block fs-5 fw-semibold" onclick="pluspro(event,${item.id})">Add To Cart</a>
                    <a href="#" class="btn btn-dark d-block mt-3 fs-5 fw-semibold">Add To Favorite <i class="fa-solid fa-heart text-danger"></i></a>
                </div>
        </div>
    </div>

    `
})



let numon = document.getElementById("numon")
let choosenproducts = localStorage.getItem("choosen") ? JSON.parse(localStorage.getItem("choosen")) : []

if (choosenproducts){
    numon.innerHTML = choosenproducts.length
    if(choosenproducts.length > 0){
        numon.style.setProperty("display","inline-block","important")
    }
}
function pluspro(event,id){
    if(localStorage.getItem("User")){
        event.preventDefault()
        let choosen = products.find((ele) => ele.id == id)
        choosenproducts = [...choosenproducts , choosen]

        localStorage.setItem("choosen", JSON.stringify(choosenproducts))
        numon.innerHTML = choosenproducts.length

        if(choosenproducts.length > 0){
            numon.style.setProperty("display","inline-block","important")
        }
    }else {
        location.assign("./pages/sign.html")
    }
    
}