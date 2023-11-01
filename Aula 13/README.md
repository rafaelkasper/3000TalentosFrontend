# Atividade ReactJS - Eventos e Hooks

- Criar um projeto com o comando: npm init vite@latest nome-projeto -- --template react

- Abrir a pasta do projeto no VSCode

- Pelo terminal do VSCode instalar as bibliotecas com: npm install

- Rodar o projeto com npm run dev

- Apagar os arquivos App.css, App.jsx e index.css

- Na pasta src criar uma pasta pages

- Na pasta pages criar um arquivo Todo.jsx e um Todo.css

- No arquivo main.tsx inserir a referência ao Todo.jsx

- Na pasta src criar uma pasta components

- Na pasta components criar uma pasta List e dentro dela os arquivos index.jsx e index.css

- Na pasta components criar uma pasta Form e dentro dela os arquivos index.jsx e index.css

- Com base no código abaixo, componentizar cada parte - inserir o formulário no componente form e a lista no componente lista (não esquecer de adaptar e inserir as props necessárias para cada componente):

```js
import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
```

- Estilize cada componente
