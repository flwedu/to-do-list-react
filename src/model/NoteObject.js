import { v4 as uuidv4 } from "uuid"

export default class NoteObject {
  constructor(text) {
    this.id = uuidv4()
    this.text = text
    this.createdAt = new Date()
    this.done = false
  }
}
