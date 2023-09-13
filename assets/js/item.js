// Seleciona o elemento label e input
var label = document.getElementById("item_label");
var input = document.getElementById("item_input");

// Adiciona ouvinte de eventos para o input ganhar foco
input.addEventListener("focus", function() {
    label.classList.add("mudar_cor_label");
    input.classList.add("mudar_cor_input");
});

// Adiciona ouvinte de eventos para o input perder foco ao clicar fora
input.addEventListener("blur", function() {
    label.classList.remove("mudar_cor_label");
    input.classList.remove("mudar_cor_input");
});
