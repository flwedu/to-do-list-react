export default class NoteObject {
  id: string
  text: string
  createdAt: number
  done: boolean

  constructor(
    text: string,
    id: string,
    createdAt = new Date().getTime(),
    done = false
  ) {
    this.id = id
    this.text = text
    this.createdAt = createdAt
    this.done = done
  }

  static createFromJson(obj: {
    text: string
    id: string
    createdAt: string
    done: boolean
  }) {
    return new NoteObject(obj.text, obj.id, Number(obj.createdAt), obj.done)
  }
}
