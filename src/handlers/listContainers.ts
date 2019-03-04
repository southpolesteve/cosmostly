import { Request, Response } from 'express'
import { data } from '../data'

export function listContainers(request: Request, response: Response) {
  const databaseId = request.params.database
  response.json({
    _rid: '',
    DocumentCollections: Object.keys(data[databaseId]).map(id => {
      return {
        id,
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
    })
  })
}
