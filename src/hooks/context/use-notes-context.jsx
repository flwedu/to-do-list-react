import { useContext } from "react"
import { NotesContext } from "../../providers/NotesProvider"

const useNotesContext = () => {
  const context = useContext(NotesContext)

  if (!context) {
    throw new Error("NotesContext is undefined")
  }

  return context
}

export default useNotesContext
