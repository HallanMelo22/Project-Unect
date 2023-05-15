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

  const afazer = document.getElementById("cinza1");
  const tarefa = document.createElement("li");
  tarefa.innerHTML = `<li id="box">
  <h1><strong>${val_inp1}<strong></h1>
  <a id="more_vert"><span class="material-icons-outlined">
						more_vert
					</span></a>
          <button id="expdet">
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
  </li>`;

  afazer.appendChild(tarefa);

  naomostre();
  input1.value = "";
  input2.value = "";
}

function togglebox() {
  const box = document.getElementById("box");
  box.classList.toggle("description");
}
const element = document.getElementById("expdet");
element.addEventListener("click", eliminatedesc());

function eliminatedesc() {
  localStorage.removeItem("description");
  togglebox();
  if (box.classList.contains("description")) {
    localStorage.toggle("description");
  }
}
function togglebox() {
  const box = document.getElementById("box");
  box.classList.toggle("description");
}

function toggledark() {
  var algo = document.getElementsByTagName("body");
  algo.classList.add("dark");
}

function changetheme() {
  console.log("oi");
  localStorage.removeItem("dark");
  toggledark();
  var algo = document.getElementById("body");

  if (algo.classList.contains("dark")) {
    localStorage.classList.add("dark");
  }
}
/*
//const buttondesc = document.getElementById("exp-det");

//buttondesc.addEventListener("click", showdetalhes);
const showdetalhes = () => {
const box = document.getElementById("box");
  const ldesc = document.getElementById("l-desc");
  const edesc = document.getElementById("e-desc");
  const exp_less = document.getElementById("exp_less");
  const expand_more = document.getElementById("expand_more");
  const detail = document.getElementById("desc");
  const update_button = document.getElementById("update-button");
  if (box.className == "nodescription") {
    box.className = "description";
    ldesc.className = "description";
    edesc.className = "description";
    exp_less.className = "description";
    expand_more.className = "description";
    detail.className = "description";
    update_button.className = "description";
  } else {
    box.className = "nodescription";
    ldesc.className = "nodescription";
    edesc.className = "nodescription";
    exp_less.className = "nodescription";
    expand_more.className = "nodescription";
    detail.className = "nodescription";
    update_button.className = "nodescription";
     }
};

*/
