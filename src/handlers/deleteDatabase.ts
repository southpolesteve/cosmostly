import { Request, Response } from 'express'
import { data } from '../data'

export function deleteDatabase(request: Request, response: Response) {
  const id = request.params.id
  delete data[id]
  response.status(204)
  response.end()
}
