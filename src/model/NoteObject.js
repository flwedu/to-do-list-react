// @ts-nocheck
import { v4 as uuidv4 } from "uuid"

export default class NoteObject {
  /**
   * @param {string} text
   * @param {string?} id
   */
  constructor(
    text,
    id = uuidv4(),
    createdAt = new Date().getTime(),
    done = false
  ) {
    this.id = id
    this.text = text
    this.createdAt = createdAt
    this.done = done
  }

  /**
   * @param {{ text: string; id: string; createdAt: string; done: string; }} obj
   */
  static createFromJson(obj) {
    return new NoteObject(
      obj.text,
      obj.id,
      Number(obj.createdAt),
      Boolean(obj.done)
    )
  }
}
