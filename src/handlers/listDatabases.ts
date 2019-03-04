import { Request, Response } from 'express'
import { data } from '../data'

export function listDatabases(_: Request, response: Response) {
  response.json({
    _rid: '',
    Databases: Object.keys(data).map(id => {
      return {
        id,
        _rid: 'rnYYAA==',
        _ts: 1408056022,
        _self: 'dbs/rnYYAA==/',
        _etag: '00004800-0000-0000-0000-53ed3ad60000',
        _colls: 'colls/',
        _users: 'users/'
      }
    })
  })
}
