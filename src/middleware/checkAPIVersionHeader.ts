import { Request, Response, NextFunction } from 'express'

export function checkAPIVersionHeader() {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.headers['x-ms-version']) {
      response.status(400)
      response.json({
        code: 'BadRequest',
        message:
          'Invalid API version. Ensure a valid x-ms-version header value is passed. Please update to the latest version of Azure Cosmos DB SDK., Microsoft.Azure.Documents.Common/2.2.0.0'
      })
      response.end()
    } else {
      next()
    }
  }
}
