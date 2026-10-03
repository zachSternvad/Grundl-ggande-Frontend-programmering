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
        {todos.map(function (todo) {
          /* key är React:s spårnings-ID — inte texten användaren läser. */
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;