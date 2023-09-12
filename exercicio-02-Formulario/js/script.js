const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const autor = document.getElementById('autor').value;
  const departamento = document.getElementById('departamento').value;
  const importancia = document.getElementById('importancia').value;

  if (descricao && autor && departamento && importancia) {

    // criando novo objeto li com os detalhes

    const li = document.createElement('li');
    //armazenando os valores da lista no li e mesclando com input
    li.textContent = `${descricao} - Autor: ${autor}, Departamento: ${departamento}, Importância: ${importancia}`;

    // botão de delet
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';

    // funcao do botao delete
    deleteButton.addEventListener('click', function() {
      li.remove();
    });

    // botao de exclusao na tarefa
    li.appendChild(deleteButton);

    // add as tarefa no li
    taskList.appendChild(li);

    // Limpandi os campos do formulário
    taskForm.reset();
  } else {
    alert('Por favor, preencha todos os campos antes de adicionar a tarefa.');
    taskForm.reset();
  }
});
