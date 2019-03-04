import { request } from './helper'

describe('Database Account', () => {
  it('valid request', async () => {
    const res = await request('/')
    expect(res.status).toEqual(200)
  })
})
