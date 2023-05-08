const mostre = () => {
  const popup = document.getElementById("popup-wrapper");
  popup.classList.add("mostrar");
};
const naomostre = () => {
  const popup = document.getElementById("popup-wrapper");
  popup.classList.remove("mostrar");
};
const botaoAddTask = document.getElementById("add-button");
botaoAddTask.onclick = mostre;

const close2 = document.getElementById("close-b");
close2.onclick = naomostre;
