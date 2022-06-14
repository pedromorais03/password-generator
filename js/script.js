let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#value")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()_+"
let newPassword = ""

function generatePassword(){
    let pass = ""
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    newPassword = pass
   
}

function copyPassword(){
    alert("Copied Password")
    navigator.clipboard.writeText(newPassword)
}

sizePassword.innerHTML = sliderElement.value

password.addEventListener("click", copyPassword)

sliderElement.addEventListener("input", () => {
    sizePassword.innerHTML = sliderElement.value
})

buttonElement.addEventListener("click", generatePassword)