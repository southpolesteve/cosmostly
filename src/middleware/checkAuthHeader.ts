import { Request, Response, NextFunction } from 'express'

export function checkAuthHeader() {
  return (request: Request, response: Response, next: NextFunction) => {
    // TODO Why does node make us check for both? Aren't headers supposed to be case insensitive?
    if (
      !request.headers['Authorization'] &&
      !request.headers['authorization']
    ) {
      response.status(401)
      response.json({
        code: 'Unauthorized',
        message:
          'Required Header authorization is missing. Ensure a valid Authorization token is passed., Microsoft.Azure.Documents.Common/2.2.0.0'
      })
      response.end()
    } else {
      next()
    }
  }
}
