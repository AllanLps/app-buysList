const inputItem = document.getElementById("item-input");
const labelItem = document.getElementById("item-label");

const inputQuantidade = document.getElementById("quantidade-input");
const labelQuantidade = document.getElementById("quantidade-label")

function addClassItem(){
    inputItem.addEventListener("focus", () =>{
        inputItem.classList.add("input_focus-item")
        labelItem.classList.add("label_focus-item")

    })
    
    inputItem.addEventListener("blur", () => {
        inputItem.classList.remove("input_focus-item")
        labelItem.classList.remove("label_focus-item")

    })
    
}

function addClassQuantidade(){
    inputQuantidade.addEventListener("focus", () => {
        inputQuantidade.classList.add("input_focus-item")
        labelQuantidade.classList.add("label_focus-item")
    })
    
    inputQuantidade.addEventListener("blur", () => {
        inputQuantidade.classList.remove("input_focus-item")
        labelQuantidade.classList.remove("label_focus-item")

    })
    
}
    

addClassItem()
addClassQuantidade()