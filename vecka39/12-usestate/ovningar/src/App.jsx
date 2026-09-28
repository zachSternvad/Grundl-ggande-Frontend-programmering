import { useState } from "react";

function App() {
  const [tracks, setTracks] = useState([
    "Fönster mot gården",
    "Källarvärme",
    "Sista bussen"
  ]);

  function addTrack() {
    setTracks([
      ...tracks,
      "Nattbussen hem"
    ]);
  }

  function changeTracks() {
    setTracks([
      "Morgonljus",
      "Källarvärme"
    ]);
  }

  return (
    <main>
      <h1>Spellista Loftet</h1>

      <p>Antal spår: {tracks.length}</p>

      <ul>
        {tracks[0] && (
          <li>{tracks[0]}</li>
        )}

        {tracks[1] && (
          <li>{tracks[1]}</li>
        )}

        {tracks[2] && (
          <li>{tracks[2]}</li>
        )}

        {tracks[3] && (
          <li>{tracks[3]}</li>
        )}
      </ul>

      <button type="button" onClick={addTrack}>
        Lägg till spår
      </button>

      <button type="button" onClick={changeTracks}>
        Byt spellista
      </button>
    </main>
  );
}

export default App;