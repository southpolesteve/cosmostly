import { Request, Response } from 'express'
import { data } from '../data'

export function createItem(request: Request, response: Response) {
  const databaseId = request.params.database
  const containerId = request.params.container
  const id = request.body.id
  data[databaseId][containerId][id] = {}
  response.status(201)
  response.json({
    id
  })
}
