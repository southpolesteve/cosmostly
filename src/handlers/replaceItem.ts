import { Request, Response } from 'express'

export function replaceItem(request: Request, response: Response) {
  // const databaseId = request.params.database
  // const containerId = request.params.container
  const id = request.params.id
  response.status(200)
  response.json({
    id,
    foo: 'bar',
    _rid: 'oy1YAOT3tN8BAAAAAAAAAA==',
    _self: 'dbs/oy1YAA==/colls/oy1YAOT3tN8=/docs/oy1YAOT3tN8BAAAAAAAAAA==/',
    _etag: '"00000000-0000-0000-d2ba-ccf9b22301d4"',
    _attachments: 'attachments/',
    _ts: 1551725284
  })
}
