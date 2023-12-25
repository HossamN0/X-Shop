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


let user = document.getElementById("user");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitbtn = document.getElementById("submitbtn")

submitbtn.addEventListener("click", function(e){
    e.preventDefault()
    if (user.value === "" || email.value === "" || password.value === ""){
        alert("Please Fill Your Info")
    } else {
        localStorage.setItem("User", user.value)
        localStorage.setItem("Email", email.value)
        localStorage.setItem("Password", password.value)

        setTimeout(() => {
            location.assign("./sign.html")
        }, 1000);
    }
})