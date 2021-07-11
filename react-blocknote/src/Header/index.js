export default function Header({fetchNote, setNoteText, setNoteInputValue}) {
    return (
        <header className="App-header">
            <button onClick={setNoteText}>Save</button>
            <input onChange={e => setNoteInputValue(e.target.value)} placeholder="Set note" />
        </header>
    )
}
