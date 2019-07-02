import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'http://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
});
