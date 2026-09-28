# ToDo Övning

* Peka i koden på facket där texten sparas under tiden du skriver (draft):
    const [draft, setDraft] = useState("");

* Peka på dörrklockan som ringer varje gång en tangent trycks ned (onChange):
    onChange={handleChange}

### Etapp 4:

*  Fråga 1 (Git · v35): Du har sparat App.jsx i VS Code och kört git commit. Syns ändringen på GitHub? Vad saknas i så fall?
    GitHub visar inga ändringar förens du kör "git push" git commit sparas bara lokalt men pushar inte till branchen.

* Fråga 2 (JS · v38): Vad är skillnaden mellan = och === i JavaScript?
    = Sätter ett värde typ äpple = 1, då har äpple ett värde av 1. Medans === jämför om det är samma värde och typ

* Fråga 3 (Funktioner · v38): Vad är skillnaden mellan att deklarera en funktion och att anropa den? Ge ett kort exempel.
    Att deklarera en funktion är att skapa funktionen och bestämma vad den ska göra. Att anropa en funktion är att köra den.

    Deklarera:
    function hej() {
    console.log("Hej!");
    }

    Anropa:
    hej();

## Workshop 2:

### Etapp 2

* Peka i koden var texten flyttas från kladdlappen (draft) upp till tavlan (todos).
    setTodos([...todos, text]);

* Förklara varför vi skriver [...todos, text] istället för todos.push(text).
    [...] skapar en ny array med det gamla innehållet och den nya texten. push() ändrar den gamla arrayen direkt, vilket vi inte ska göra med React state.

### Etapp 4:

* Fråga 1 (Arrayer · v38): I const tasks = ["A", "B", "C"] — vad ger tasks[0]? Vad ger tasks.length? Är sista indexet samma som length?
    tasks[0] ger "A". tasks.length ger 3 eftersom arrayen innehåller tre items. Det sista indexet är [2], eftersom index börjar på 0, så det sista indexet är alltid length - 1.

* Fråga 2 (Variabler · v38): När använder ni const respektive let? Vad händer om ni försöker tilldela om en const?
    const används när en variabel inte ska tilldelas om, medan let används när värdet kan ändras. Om man försöker tilldela om en const får man ett TypeError.

* Fråga 3 (CSS · v36): Vad är skillnaden mellan display: flex och display: grid? När väljer ni vilket?
        display: flex används främst för att placera element i en rad eller kolumn. display: grid används för att skapa layouter med både rader och kolumner, alltså ett rutnät.