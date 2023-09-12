let label = document.getElementById("text_itens")
let input = document.getElementById("item_input")

input.addEventListener("focus", setClassInput)
label.addEventListener("click", setClassLabel)

function setClassLabel(){
    label.classList.toggle("mudar_cor_label")
   
}

function setClassInput(){
        input.classList.toggle("mudar_cor_input")
}




