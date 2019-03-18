import { Request, Response } from 'express'
import { db } from '../data'

const staticAttributes = {
  _rid: 'rnYYAA==',
  _ts: 1408056022,
  _self: 'dbs/rnYYAA==/',
  _etag: '00004800-0000-0000-0000-53ed3ad60000',
  _colls: 'colls/',
  _users: 'users/'
}

export function create(request: Request, response: Response) {
  const id = request.body.id
  db.set(`databases.${id}`, { _ts: Date.now() }).write()
  response.status(201)
  response.json({
    id: request.body.id,
    ...staticAttributes
  })
}

export function destroy(request: Request, response: Response) {
  const database = request.params.database
  db.unset(`databases.${database}`).write()
  response.status(204)
  response.end()
}

export function get(request: Request, response: Response) {
  const database = request.params.database
  const databaseBody = db.get(`databases.${database}`).value()
  response.json({
    id: database,
    ...databaseBody,
    ...staticAttributes
  })
}

export function list(_: Request, response: Response) {
  const databases = db.get(`databases`).value()
  response.json({
    _rid: '',
    Databases: Object.keys(databases).map(id => {
      return {
        id,
        ...staticAttributes
      }
    })
  })
}
