import NoteObject from "../model/NoteObject"

export default class LocalStorageService {
  dbName: string

  constructor(dbName: string) {
    this.dbName = dbName
  }

  save(notes: NoteObject[]) {
    const json = JSON.stringify(notes)
    localStorage.setItem(this.dbName, json)
  }

  load(): NoteObject[] {
    const json = localStorage.getItem(this.dbName)
    if (!json) {
      return []
    }
    const notes = JSON.parse(json)
    if (!notes.length) return []
    return notes.map(NoteObject.createFromJson)
  }
}
