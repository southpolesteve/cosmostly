import { Request, Response } from 'express'
import { db } from '../data'

const staticAttributes = {
  _rid: 'oy1YAOT3tN8BAAAAAAAAAA==',
  _self: 'dbs/oy1YAA==/colls/oy1YAOT3tN8=/docs/oy1YAOT3tN8BAAAAAAAAAA==/',
  _etag: '"00000000-0000-0000-d2ba-ccf9b22301d4"',
  _attachments: 'attachments/'
}

export function create(request: Request, response: Response) {
  const databaseId = request.params.database
  const containerId = request.params.container
  const { id, ...body } = request.body
  db.set(
    `databases.${databaseId}.containers.${containerId}.items.${id}`,
    Object.assign(body, {
      _ts: Date.now()
    })
  ).write()
  response.status(201)
  response.json({
    id,
    ...body,
    ...staticAttributes
  })
}

export function destroy(request: Request, response: Response) {
  const databaseId = request.params.database
  const containerId = request.params.database
  const id = request.params.item
  db.unset(
    `databases.${databaseId}.containers.${containerId}.items.${id}`
  ).write()
  response.status(204)
  response.end()
}

export function get(request: Request, response: Response) {
  const databaseId = request.params.database
  const containerId = request.params.container
  const id = request.params.id
  db.get(
    `databases.${databaseId}.containers.${containerId}.items.${id}`
  ).value()
  response.status(200)
  response.json({
    id,
    ...staticAttributes
  })
}

export function list(request: Request, response: Response) {
  const databaseId = request.params.database
  const containerId = request.params.container
  const items = db
    .get(`databases.${databaseId}.containers.${containerId}.items`)
    .value()
  response.json({
    _rid: '',
    Documents: Object.keys(items).map(id => {
      return {
        id,
        ...staticAttributes
      }
    })
  })
}

export function replace(request: Request, response: Response) {
  const databaseId = request.params.database
  const containerId = request.params.container
  const id = request.params.id
  const { id: _id, ...body } = request.body
  db.set(
    `databases.${databaseId}.containers.${containerId}.items.${id}`,
    Object.assign(body, {
      _ts: Date.now()
    })
  ).value()
  response.status(200)
  response.json({
    id,
    ...body,
    ...staticAttributes
  })
}
