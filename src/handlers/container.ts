import { Request, Response } from 'express'
import { db } from '../data'

const staticAttributes = {
  indexingPolicy: {
    indexingMode: 'consistent',
    automatic: true,
    includedPaths: [
      {
        path: '/*',
        indexes: [
          { kind: 'Range', dataType: 'Number', precision: -1 },
          { kind: 'Range', dataType: 'String', precision: -1 }
        ]
      }
    ],
    excludedPaths: [{ path: '/"_etag"/?' }]
  },
  _rid: 'd-UHAK5GBbk=',
  _ts: 1551661863,
  _self: 'dbs/d-UHAA==/colls/d-UHAK5GBbk=/',
  _etag: '"00000000-0000-0000-d227-22df75d101d4"',
  _docs: 'docs/',
  _sprocs: 'sprocs/',
  _triggers: 'triggers/',
  _udfs: 'udfs/',
  _conflicts: 'conflicts/'
}

export function create(request: Request, response: Response) {
  const databaseId = request.params.database
  const id = request.body.id
  db.set(`databases.${databaseId}.containers.${id}`, {
    _ts: Date.now()
  }).write()
  response.status(201)
  response.json({
    id,
    ...staticAttributes
  })
}

export function destroy(request: Request, response: Response) {
  const databaseId = request.params.database
  const id = request.params.container
  db.unset(`databases.${databaseId}.containers.${id}`).write()
  response.status(204)
  response.end()
}

export function get(request: Request, response: Response) {
  const databaseId = request.params.database
  const id = request.params.container
  db.get(`databases.${databaseId}.containers.${id}`).value()
  response.status(200)
  response.json({
    id,
    ...staticAttributes
  })
}

export function list(request: Request, response: Response) {
  const databaseId = request.params.database
  const containers = db.get(`databases.${databaseId}.containers`).value()
  response.json({
    _rid: '',
    DocumentCollections: Object.keys(containers).map(id => {
      return {
        id,
        ...staticAttributes
      }
    })
  })
}

export function replace(request: Request, response: Response) {
  const databaseId = request.params.database
  const id = request.params.container
  db.get(`databases.${databaseId}.containers.${id}`).value()
  response.status(200)
  response.json({
    id,
    ...staticAttributes
  })
}
