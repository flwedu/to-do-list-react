import React, { useState } from "react"
import useNotesContext from "../hooks/context/use-notes-context"

export default function InputField() {
  const { addNoteWithText } = useNotesContext()
  const [inputText, setInputText] = useState("")

  /**
   * @param {*} event
   */
  function onSubmit(event) {
    event.preventDefault()
    addNoteWithText(inputText)
    setInputText("")
  }

  /**
   * @param {*} event
   */
  function handleTextChange(event) {
    const value = event.target.value
    setInputText(value)
  }

  return (
    <div className="text_input">
      <input
        type="text"
        name="text"
        id="text"
        onChange={handleTextChange}
        value={inputText}
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  )
}
