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

  var val_inp1 = input1.value;
  var val_inp2 = input2.value;

  const afazer = document.getElementById("cinza1");
  const tarefa = document.createElement("li");

  tarefa.innerHTML = `
  <li id="box">
    <div class="esc-desc">
  
      <h1><strong>${val_inp1}<strong></h1>

      <div class="threepoints">
        <a id="more_vert"><span class="material-icons-outlined">
          more_vert
          </span>
       </a>
      </h1>
      </div>
    </div>

  <div class="showdet">
  <button id="expdet" onclick="showdetalhes()">
  <h2 id="l-desc">
<en>Ler descrição</en>
    <a id="expand_more"><span class="material-icons-outlined">
      expand_more
      </span>
     
    </a>
    
    </h2> 
    <h3 id="e-desc">
<en>Esconder descrição</en>
</h3>
<a id="exp_less"><span class="material-icons-outlined">
  expand_less
</span></a>
</button>
<p id="desc">${val_inp2} </p>
<div class="upbut">
<div id="update-button"><span class="material-icons-outlined">
    navigate_next
  </span>
  </div>
  </div>
  </div>
  
  </li>`;

  afazer.appendChild(tarefa);

  naomostre();
  input1.value = "";
  input2.value = "";
}

function togglebox(a) {
  a.classList.toggle("description");
}
/*
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
*/
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

var coll = document.getElementsById("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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
  togglebox(box);
  if (box.className == "description") {
    ldesc.classList.add("description");
    edesc.classList.add("description");
    exp_less.classList.add("description");
    expand_more.classList.add("description");
    detail.classList.add("description");
    update_button.classList.add("description");
  } else {
    ldesc.classList.remove("description");
    edesc.classList.remove("description");
    exp_less.classList.remove("description");
    expand_more.classList.remove("description");
    detail.classList.remove("description");
    update_button.classList.remove("description");
  }
};
