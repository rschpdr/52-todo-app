// 2. Escutar o evento de clique no botão de adicionar, e adicionar uma nova tarefa à lista quando esse evento acontece
const addToDoBtn = document.getElementById("addToDoBtn");
const addToDoInput = document.getElementById("addToDoInput");

// Instanciando a classe principal da aplicação, que vai guardar a lista de tarefas
const mainList = new List();

addToDoBtn.addEventListener("click", () => {
  // A propriedade 'value' guarda o conteúdo de texto atual digitado pelo usuário no input
  const newTaskDescription = addToDoInput.value;

  // Instanciar um ToDo usando essa descrição
  const newToDo = new ToDo(newTaskDescription);

  // Adicionar o novo ToDo na lista de todos os ToDos
  mainList.addToDo(newToDo);

  // 4. Atualizar os estilos de cada tarefa no HTML de acordo com o status da mesma
  // 'checkboxes' é uma HTMLCollection, que é diferente de uma array. Por conta disso, precisamos usar o for, pois esse tipo objeto não tem o método 'map'
  // Adicionar o listener do evento 'change' para cada checkbox da nossa lista
  const checkboxes = document.getElementsByClassName("custom-control-input");

  for (let i = 0; i < checkboxes.length; i++) {
    // Selecionando a li subindo dois níveis hierárquicos a partir da checkbox atual
    const li = checkboxes[i].parentElement.parentElement;

    // Selecionar o To-Do correto da lista a partir da posição que temos guardada no atributo 'id' do HTML de cada tarefa
    const currentToDoObject = mainList.list[parseInt(li.id)];

    checkboxes[i].addEventListener("change", () => {
      currentToDoObject.markAsDone();

      console.log(currentToDoObject);
    });
  }
});
