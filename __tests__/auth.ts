import { request } from './helper'

describe('Authentication', () => {
  it('no auth header', async () => {
    const res = await request('/', { headers: {} })
    expect(res.status).toEqual(401)
    const body = await res.json()
    expect(body.message).toMatch(
      'Required Header authorization is missing. Ensure a valid Authorization token is passed.'
    )
  })
  it('no version header', async () => {
    const res = await request('/', {
      headers: {
        Authorization: 'badHeader'
      }
    })
    expect(res.status).toEqual(400)
    const body = await res.json()
    expect(body.message).toMatch(
      'Invalid API version. Ensure a valid x-ms-version header value is passed. Please update to the latest version of Azure Cosmos DB SDK.'
    )
  })
})
