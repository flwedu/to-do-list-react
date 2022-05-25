import { useContext } from "react"
import { NotesContext } from "../../providers/NotesProvider"

const useNotesContext = () => {
  const context = useContext(NotesContext)

  return context
}

export default useNotesContext
