import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ databases: {} }).write()

export { db }

// export function db() {}
