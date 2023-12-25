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


let email = document.getElementById("email");
let password = document.getElementById("password");
let submitbtn = document.getElementById("submitbtn");
let errorhere = document.getElementById("errorhere")

let userlocal = localStorage.getItem("User")
let emaillocal = localStorage.getItem("Email")
let passlocal = localStorage.getItem("Password")


submitbtn.addEventListener("click", function(e){
    e.preventDefault()
    if (email.value === "" || password.value === ""){
        alert("Please Fill Your Info")
    } else {
        if(email.value === emaillocal && password.value === passlocal){
                location.assign("../index.html")
        }else{
            errorhere.style.setProperty("display","block","important")
            errorhere.innerHTML = "Username or Password Wrong"
        }
    }
})