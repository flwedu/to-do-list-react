// @ts-nocheck
import React, { useState } from "react"
import NoteObject from "../model/NoteObject.js"

/**
 *
 * @param {{note: NoteObject; doneCallback: (id: string) => void}} param0
 * @returns
 */
export function Note({ note, doneCallback }) {
  const [done, setDone] = useState(false)

  function handleClick() {
    setDone(!done)
    doneCallback(note.id)
  }

  function getTimeSinceCreation() {
    const now = new Date()
    const seconds = (now.getTime() - note.createdAt) / 1000
    if (seconds < 60) return `${Math.floor(seconds)} seconds`
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minuts`
    return `${Math.floor(seconds / 3600)} hours`
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: done ? "line-through" : "none" }}
    >
      <span>{note.text}</span>
      <span> - ⏳ {getTimeSinceCreation()}</span>
    </li>
  )
}
