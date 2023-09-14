// Selecionar o elemento label e input
let label = document.getElementById("item_label");
let input = document.getElementById("item_input");

// Adicionar ouvinte de eventos para o input ganhar foco
input.addEventListener("focus", function() {
    label.classList.add("mudar_cor_label");
    input.classList.add("mudar_cor_input");
});

// Adicionar ouvinte de eventos para o input perder foco
input.addEventListener("blur", function() {
    label.classList.remove("mudar_cor_label");
    input.classList.remove("mudar_cor_input");
});