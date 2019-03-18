import { request, generateId, createDatabase, deleteDatabase } from './helper'

describe('Databases', () => {
  const id = generateId()
  describe('create', () => {
    it('valid request', async () => {
      const res = await createDatabase(id)
      expect(res.status).toEqual(201)
      const body = await res.json()
      expect(body.id).toEqual(id)
    })
  })
  describe('list', () => {
    it('valid request', async () => {
      const res = await request(`/dbs`, {
        method: 'GET',
        resource: 'dbs'
      })
      expect(res.status).toEqual(200)
      const body = await res.json()
      expect(body.Databases).toBeDefined()
    })
  })
  describe('get', () => {
    it('valid request', async () => {
      const res = await request(`/dbs/${id}`, {
        method: 'GET',
        resource: 'dbs',
        resourceId: `dbs/${id}`
      })
      expect(res.status).toEqual(200)
      const body = await res.json()
      expect(body.id).toEqual(id)
    })
  })
  describe('delete', () => {
    it('valid request', async () => {
      const res = await deleteDatabase(id)
      expect(res.status).toEqual(204)
    })
  })
})
