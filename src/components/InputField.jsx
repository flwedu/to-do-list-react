import React, { useState } from "react"

/**
 *
 * @param {{addNoteCallback: (text: string) => void}} param0
 * @returns
 */
export default function InputField({ addNoteCallback }) {
  const [inputText, setInputText] = useState("")

  /**
   * @param {*} event
   */
  function onSubmit(event) {
    event.preventDefault()
    addNoteCallback(inputText)
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
