let inputQuantidade = document.getElementById("quantidade_input")
let labelQuantidade = document.getElementById("quantidade_label")

inputQuantidade.addEventListener("focus", () => {
    labelQuantidade.classList.add("mudar_cor_label")
    inputQuantidade.classList.add("mudar_cor_input")
})

inputQuantidade.addEventListener("blur", () => {
    labelQuantidade.classList.remove("mudar_cor_label")
    inputQuantidade.classList.remove("mudar_cor_input")
})