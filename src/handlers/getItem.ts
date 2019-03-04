import { Request, Response } from 'express'

export function getItem(request: Request, response: Response) {
  // const databaseId = request.params.database
  // const containerId = request.params.container
  const id = request.params.id
  response.status(200)
  response.json({
    id
  })
}
