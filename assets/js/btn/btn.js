const button = document.getElementById("btn-dropdown")

button.addEventListener("click", function() {
    button.classList.add("mudar_btn")
})

button.addEventListener("blur", function() {
    button.classList.remove("mudar_btn")
})

