let inputItem = document.getElementById("item-input");
let inputQuantidade = document.getElementById("quantidade-input")

    
inputQuantidade.addEventListener("focus", () => {
    inputItem.classList.add("input_focus-quantidade")    
})
// inputItem.addEventListener("focus", () => {
//         addClasslist()
// })

inputItem.addEventListener("blur", () => {
    removeClasslist()
})
// inputItem.addEventListener("blur", () => {
//         removeClasslist()
// })






function addClasslist(){
    inputItem.classList.add("input_focus")       
    
}
function removeClasslist(){
    inputItem.classList.remove("input_focus")
}

