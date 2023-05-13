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

function novatask() {
  const input1 = document.getElementById("input-tit");
  const input2 = document.getElementById("input-des");

  const val_inp1 = input1.value;
  const val_inp2 = input2.value;

  const afazer = document.getElementById("cinza-1");

  const tarefa = document.createElement("li");
  tarefa.innerHTML = `<div id="box" class="nodescription">
  <h1><strong>${val_inp1}<strong></h1>
  <a id="more_vert"><span class="material-icons-outlined">
						more_vert
					</span></a>
          <button id="exp-det" onclick="showdetalhes()">
          <h2 id="l-desc">
				<en>Ler descrição</en>
			  </h2> 
        <h3 id="e-desc">
        <en>Esconder descrição</en>
      </h3>
      <a id="exp_less"><span class="material-icons-outlined">
          expand_less
        </span></a>
        <a id="expand_more"><span class="material-icons-outlined">
        expand_more
      </span></a>
      </button>
      <p id="desc">${val_inp2} </p>
    <div id="update-button"><span class="material-icons-outlined">
        navigate_next
      </span>
      </div>
  </div>`;

  afazer.appendChild(tarefa);

  naomostre();
  input1.value = "";
  input2.value = "";
}
const showdetalhes = () => {
  const box = document.getElementById("box");
  const ldesc = document.getElementById("l-desc");
  const edesc = document.getElementById("e-desc");
  const exp_less = document.getElementById("exp_less");
  const expand_more = document.getElementById("expand_more");
  const desc = document.getElementById("desc");
  const update_button = document.getElementById("update-button");

  if (box.className == "nodescription") {
    box.className = "description";
    ldesc.className = "description";
    edesc.className = "description";
    exp_less.className = "description";
    expand_more.className = "description";
    desc.className = "description";
    update_button.className = "description";
  } else {
    box.className = "nodescription";
    ldesc.className = "nodescription";
    edesc.className = "nodescription";
    exp_less.className = "nodescription";
    expand_more.className = "nodescription";
    desc.className = "nodescription";
    update_button.className = "nodescription";
  }
};
