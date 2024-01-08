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


let signlocal = document.getElementById("signlocal")


if (localStorage.getItem("User")){
    firul.remove()
    secul.style.setProperty("display", "block", "important");
    use1.innerHTML = localStorage.getItem("User")
}else{
    

signlocal.addEventListener("click", function (e){
    e.preventDefault()

    localStorage.setItem("checksign", true)

    setTimeout(() => {
        location.assign("./pages/reg.html")
    }, 1000);
})


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
        in:"Car",
        title:"BMW",
        url:"./img/1.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:2,
        in:"Car",
        title:"Audi",
        url:"./img/2.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:3,
        in:"Watch",
        title:"C-watch",
        url:"./img/3.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:4,
        in:"Phone",
        title:"IPhone",
        url:"./img/4.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:5,
        in:"Car",
        title:"Toyota",
        url:"./img/5.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    },
    {
        id:6,
        in:"Lap Top",
        title:"MacBook",
        url:"./img/6.jpg",
        disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, corrupti atque quae veniam pariatur eius."
    }
]
let allshow = document.getElementById("allshow")
let productcontent = document.getElementById("productcontent");

if (allshow.classList.contains("activeselect")){
    
products.forEach(function (item){
    productcontent.innerHTML += `
        <div class="col-12 col-md-6 col-xl-4 mb-5">
            <div class="card card-shadow d-inline-block">
                <img src="${item.url}" alt="pro-1" class="card-img-top rounded-3">
                <div class="card-body">
                <h2 class="card-title display-4 fw-semibold">${item.title}</h2>
                <p class="card-text">${item.disc}</p>
                <a href="#" class="btn btn-dark d-block fs-5 fw-semibold" onclick="pluspro(event,${item.id})">Add To Cart</a>
                
                </div>
            </div>
        </div>

    `
})
}



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
        location.assign("./pages/reg.html")
    }
    
}

let allprodd = document.querySelectorAll(".allprodd div a")

allprodd.forEach(function(item){

    item.addEventListener("click", function(event){
        event.preventDefault()

        allprodd.forEach(function(all){
            all.classList.remove("activeselect")
        })
        item.classList.add("activeselect")
        console.log(item)

        let findall = products.filter((elee) => elee.in === item.innerHTML)

        productcontent.innerHTML = ""

        findall.forEach(function (showthis){
            
        productcontent.innerHTML += `
    <div class="col-12 col-md-6 col-xl-4 mb-5">
        <div class="card card-shadow d-inline-block">
            <img src="${showthis.url}" alt="pro-1" class="card-img-top rounded-3">
                <div class="card-body">
                    <h2 class="card-title display-4 fw-semibold">${showthis.title}</h2>
                    <p class="card-text">${showthis.disc}</p>
                    <a href="#" class="btn btn-dark d-block fs-5 fw-semibold" onclick="pluspro(event,${showthis.id})">Add To Cart</a>
                    
                </div>
        </div>
    </div>

    `
        window.scrollTo(0, 0);
        })

        if(allshow.classList.contains("activeselect")){
                    
            products.forEach(function (item){
                productcontent.innerHTML += `
                <div class="col-12 col-md-6 col-xl-4 mb-5">
                    <div class="card card-shadow d-inline-block">
                        <img src="${item.url}" alt="pro-1" class="card-img-top rounded-3">
                            <div class="card-body">
                                <h2 class="card-title display-4 fw-semibold">${item.title}</h2>
                                <p class="card-text">${item.disc}</p>
                                <a href="#" class="btn btn-dark d-block fs-5 fw-semibold" onclick="pluspro(event,${item.id})">Add To Cart</a>
                                
                            </div>
                    </div>
                </div>
                `
                window.scrollTo(0, 0);
            })
        }

    })
})

let mediax = window.matchMedia("(max-width: 991px)")

function updatemedia(media){
    
    if(media.matches){
        productcontent.classList.remove("col-9")
        productcontent.classList.add("col-12")
    }else {
        productcontent.classList.add("col-9")
        productcontent.classList.remove("col-12")
    }

}

updatemedia(mediax)

mediax.addEventListener("change", function(mediaMatch){
    updatemedia(mediaMatch)
})

let searchinput = document.getElementById("searchinput");

searchinput.addEventListener("change", function() {
    let onit = searchinput.value.toLowerCase().split("");

    productcontent.innerHTML = ""


    let matchfound = false; 

    products.forEach((pro)=>{
        let proname = pro.title.toLowerCase().split("")
        let match = false

            if (proname.slice(0, 0 + onit.length).join("") === onit.join("")) {
                match = true;
            }
        
            if (match) {
                matchfound = true;
                productcontent.innerHTML += `
                    <div class="col-12 col-md-6 col-xl-4 mb-5">
                        <div class="card card-shadow d-inline-block">
                            <img src="${pro.url}" alt="pro-1" class="card-img-top rounded-3">
                                <div class="card-body">
                                    <h2 class="card-title display-4 fw-semibold">${pro.title}</h2>
                                    <p class="card-text">${pro.disc}</p>
                                    <a href="#" class="btn btn-dark d-block fs-5 fw-semibold" onclick="pluspro(event,${pro.id})">Add To Cart</a>
                                    
                                </div>
                        </div>
                    </div>
                    `
            }

            
    })
    if (!matchfound){
        productcontent.innerHTML = `<p class="text-center bg-white text-dark fs-2 fw-bold rounded-3 m-auto py-3"> Not Found </p>`
    }
});