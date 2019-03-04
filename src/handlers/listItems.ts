import { Request, Response } from 'express'
import { data } from '../data'

export function listItems(request: Request, response: Response) {
  const databaseId = request.params.database
  const containerId = request.params.container
  response.json({
    _rid: '',
    Documents: Object.keys(data[databaseId][containerId]).map(id => {
      return {
        id
      }
    })
  })
}
