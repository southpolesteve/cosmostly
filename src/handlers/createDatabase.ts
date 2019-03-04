import { Request, Response } from 'express'
import { data } from '../data'

export function createDatabase(request: Request, response: Response) {
  const id = request.body.id
  data[id] = {}
  response.status(201)
  response.json({
    id: request.body.id,
    _rid: 'rnYYAA==',
    _ts: 1408056022,
    _self: 'dbs/rnYYAA==/',
    _etag: '00004800-0000-0000-0000-53ed3ad60000',
    _colls: 'colls/',
    _users: 'users/'
  })
}
