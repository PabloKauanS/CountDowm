document.querySelector(".principal-botao").addEventListener("click",Abrir);
document.querySelector(".botao-fechar").addEventListener("click",Fechar);

function Abrir() {
  document.querySelector(".modal-bg").style.display = "grid";
}
function Fechar() {
  document.querySelector(".modal-bg").style.display = "none";
}
