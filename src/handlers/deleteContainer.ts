import { Request, Response } from 'express'
import { data } from '../data'

export function deleteContainer(request: Request, response: Response) {
  const databaseId = request.params.database
  const id = request.params.container
  delete data[databaseId][id]
  response.status(204)
  response.end()
}
