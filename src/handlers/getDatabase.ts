import { Request, Response } from 'express'

export function getDatabase(request: Request, response: Response) {
  const database = request.params.database
  response.json({
    id: database,
    _rid: 'rnYYAA==',
    _ts: 1408056022,
    _self: 'dbs/rnYYAA==/',
    _etag: '00004800-0000-0000-0000-53ed3ad60000',
    _colls: 'colls/',
    _users: 'users/'
  })
}
