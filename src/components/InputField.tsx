import React, { useState } from "react"
import useNotesContext from "../hooks/context/use-notes-context"

export default function InputField() {
  const { addNoteWithText } = useNotesContext()!
  const [text, setText] = useState("")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addNoteWithText(text)
    setText("")
  }

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setText(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="text"
        type="text"
        name="text"
        id="text"
        onChange={onChange}
        value={text}
      />
      <input type="submit" className="button" value="Add" />
    </form>
  )
}
