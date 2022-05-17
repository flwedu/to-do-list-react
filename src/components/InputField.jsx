import React, { useState } from "react"

export default function InputField({ addNoteCallback }) {
  const [inputText, setInputText] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    addNoteCallback(inputText)
    setInputText("")
  }

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
