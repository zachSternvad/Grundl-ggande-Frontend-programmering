import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Exam 2 senare",
  ]);

  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>


      <input type="text" value={draft} onChange={handleChange} placeholder="Skriv uppgiften....." />
      <p>Kladd för nu: {draft}</p>

      <ul>
        <li>{todos[0]}</li>
        <li>{todos[1]}</li>
        <li>{todos[2]}</li>
      </ul>
    </main>
  );
}

export default App;