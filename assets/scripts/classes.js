// Classe representando uma lista de tarefas

// 1. Definir as estruturas lógicas das classes (por enquanto, nada relacionado a DOM)
class List {
  constructor() {
    this.list = [];
    this.listElement = document.getElementById("listElement");
  }

  addToDo(toDo) {
    // Adiciona um novo ToDo na lista
    this.list.push(toDo);

    // Atualiza o DOM para sincronizar as mudanças
    this.updateListMarkup();
  }

  removeToDo(toDo) {
    const index = this.list.indexOf(toDo);

    this.list.splice(index, 1);
  }

  // 3. Atualizar o HTML a partir da nossa lista lógica
  updateListMarkup() {
    this.listElement.innerHTML = "";

    // Para cada elemento da lista de To-Dos
    this.list.map((toDo, index) => {
      // Criando o li
      const li = document.createElement("li");

      // Cria um id para esse determinado li igual à posição dessa tarefa na lista
      li.id = index;

      // Adicionando a classe do CSS dele
      li.classList.add("list-group-item");

      // Atualizando o conteúdo textual do li pra ser a descrição do To-Do
      li.innerText = toDo.description;

      // Criando a div do checkbox
      const div = document.createElement("div");

      // Adicionando as classes do CSS da div
      div.classList.add("custom-control", "custom-checkbox", "d-inline");

      // Criando o checkbox
      const checkbox = document.createElement("input");

      // Adicionando as classes do CSS do checkbox
      checkbox.classList.add("custom-control-input");

      // Configurando o 'type' do input para checkbox
      checkbox.type = "checkbox";

      // 4. Atualizar os estilos de cada tarefa no HTML de acordo com o status da mesma
      // Configurar o atributo 'checked' pra ser equivalente ao status da tarefa
      console.log(toDo);
      if (toDo.status === "Done") {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }

      // Colocar o input dentro da div
      div.appendChild(checkbox);

      // Colocar a div dentro do li
      li.appendChild(div);

      // Colocar o li dentro da lista
      this.listElement.appendChild(li);
    });
  }
}

// 1. Definir as estruturas lógicas das classes (por enquanto, nada relacionado a DOM)
class ToDo {
  constructor(description) {
    this.createdAt = new Date();
    this.status = "To-Do";
    this.description = description;
  }

  markAsDone() {
    this.status = "Done";
  }
}
