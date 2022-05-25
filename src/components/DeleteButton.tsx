import useNotesContext from "../hooks/context/use-notes-context"

export default function DeleteButton({ noteId }: { noteId: string }) {
  const { deleteNote } = useNotesContext()!

  function handleClick() {
    deleteNote(noteId)
  }

  return (
    <button className="button" onClick={handleClick}>
      {" "}
      X{" "}
    </button>
  )
}
