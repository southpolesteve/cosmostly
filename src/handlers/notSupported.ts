import { Request, Response } from 'express'

export function notSupported(_: Request, response: Response) {
  response.status(400)
  response.send(
    'Cosmostly does not support this operation! See the README for mor information'
  )
}
