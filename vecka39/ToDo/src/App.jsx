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

  function handleClear() {
    setDraft("");
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, text]);
    setDraft("");
  }

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>

      <input type="text" value={draft} onChange={handleChange} placeholder="Skriv uppgiften....." />

      <button type="button" onClick={handleAdd}>Lägg till</button>

      <button type="button" onClick={handleClear}>Rensa</button>

      <p>Kladd för nu: {draft}</p>


      {/* TODO: detta skalar inte — behöver loop */}
      <ul>
        <li>{todos[0]}</li>
        <li>{todos[1]}</li>
        <li>{todos[2]}</li>
        <li>{todos[3]}</li>
        <li>{todos[4]}</li>
      </ul>
    </main>
  );
}

export default App;