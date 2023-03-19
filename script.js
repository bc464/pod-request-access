const input = document.querySelector("input")
const btn = document.querySelector(".btn")
const error_msg = document.querySelector(".error-msg")

btn.addEventListener("click", function(){
    
    if (input.value === "") {
        error_msg.style.display = "block"
        error_msg.innerHTML = "Oops! Please add your email"
    } else if (!input.value.includes("@"))  {
        error_msg.style.display = "block"
        error_msg.innerHTML = "Oops! Please check your email"
    }
    else {
        input.value = ""
        error_msg.style.display = "none"
    }

})

