import NoteObject from "../model/NoteObject.js"

export default class LocalStorageService {
  /**
   * @param {string} dbName
   */
  constructor(dbName) {
    this.dbName = dbName
  }

  /**
   * @param {NoteObject[]} notes
   */
  save(notes) {
    const json = JSON.stringify(notes)
    localStorage.setItem(this.dbName, json)
  }

  /**
   *
   * @returns {NoteObject[]}
   */
  load() {
    const json = localStorage.getItem(this.dbName)
    if (!json) {
      return []
    }
    const notes = JSON.parse(json)
    if (!notes.length) return []
    return notes.map(NoteObject.createFromJson)
  }
}
