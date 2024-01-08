


let user = document.getElementById("user");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitbtn = document.getElementById("submitbtn");
let signinswap = document.getElementById("sign-in-swap")
let divswap = document.getElementById("div-swap")
let roundedd = document.getElementById("roundedd")
let createform = document.getElementById("createform")
let contentreg = document.getElementById("contentreg")



let emailsignin = document.getElementById("emailsignin")
let passwordsignin = document.getElementById("passwordsignin")
let submmitsignin = document.getElementById("submmitsignin")
let errorhere = document.getElementById("errorhere")

let check = localStorage.getItem("checksign")

let mediax = window.matchMedia("(max-width: 991px)")


let showreg = document.getElementById("showreg")
let showsign = document.getElementById("showsign")


mediax.addEventListener("change", function (){
    if (mediax){
        createform.style.setProperty("display","block","important")
    }
})


submitbtn.addEventListener("click", function(e){
    e.preventDefault()
    if (user.value === "" || email.value === "" || password.value === ""){
        alert("Please Fill Your Info")
    } else {
        if (!/@/.test(email.value)) {
            alert("Please enter a valid email address");
            return;
        }

        localStorage.setItem("User", user.value)
        localStorage.setItem("Email", email.value)
        localStorage.setItem("Password", password.value)

        divswap.classList.remove("t-0")
        divswap.classList.add("t-auto")
        divswap.classList.add("t-auto")
        roundedd.style.setProperty("border-radius", "200px 10px 10px 200px", "important")
        signinswap.innerHTML = "Register"
        divswap.style.transition = "transform 1.8s";
        roundedd.style.transition = "border-radius 1.8s";  
        

        if (mediax.matches){
            setTimeout(() => {
                createform.style.setProperty("display","none","important")
            }, 1000);
        }else{
            createform.style.setProperty("display","block","important")
        }
        setTimeout(() => {
            user.value = ""
            email.value = ""
            password.value = ""
        }, 1000);

        }
        
})

signinswap.addEventListener("click", function(e){
    e.preventDefault()

    if(divswap.classList.contains("t-0")){
        divswap.classList.remove("t-0")
        divswap.classList.add("t-auto")
        roundedd.style.setProperty("border-radius", "200px 10px 10px 200px", "important")
        signinswap.innerHTML = "Register"
        contentreg.innerHTML = "if u have not account you can"
    }else {
        divswap.classList.add("t-0")
        divswap.classList.remove("t-auto")
        roundedd.style.setProperty("border-radius", "10px 200px 200px 10px", "important")
        signinswap.innerHTML = "Sign In"
        contentreg.innerHTML = "if u have account you can"
    }
    divswap.style.transition = "transform 1.8s";
    roundedd.style.transition = "border-radius 1.8s";

    setTimeout(() => {
        user.value = ""
        email.value = ""
        password.value = ""
        emailsignin.value = ""
        passwordsignin.value = ""
        errorhere.style.setProperty("display","none","important")
    }, 1000);

})





submmitsignin.addEventListener("click", function (e) {
        
    let trueemail = localStorage.getItem("Email")
    let truepass = localStorage.getItem("Password")
    
    e.preventDefault()
    if (emailsignin.value === "" || passwordsignin.value === ""){
        alert("Please Fill Your Info")
    } else {
        if(emailsignin.value === trueemail && passwordsignin.value === truepass){
                location.assign("../index.html")
        }else{
            errorhere.style.setProperty("display","block","important")
            errorhere.innerHTML = "Username or Password Wrong"
        }
    }
})





if (check){
    if (mediax.matches){
        createform.style.setProperty("display","none","important")
    }else{
        divswap.classList.remove("t-0")
        divswap.classList.add("t-auto")
        roundedd.style.setProperty("border-radius", "200px 10px 10px 200px", "important")
        signinswap.innerHTML = "Register"
        contentreg.innerHTML = "if u have not account you can"
    }

    
    setTimeout(() => {
        localStorage.removeItem("checksign")
    }, 500);
}


showreg.addEventListener("click", function(e){
    e.preventDefault()

    createform.style.setProperty("display", "block", "important")
})

showsign.addEventListener("click", function(e){
    e.preventDefault()

    createform.style.setProperty("display", "none", "important")
})