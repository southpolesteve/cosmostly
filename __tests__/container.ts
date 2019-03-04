import { request, generateId, createDatabase, createContainer } from './helper'

describe('Containers', () => {
  let databaseId: string = generateId()
  beforeAll(async () => {
    await createDatabase(databaseId)
  })
  describe('create', () => {
    it('valid request', async () => {
      const id = generateId()
      const res = await createContainer(databaseId, id)
      const body = await res.json()
      expect(res.status).toEqual(201)
      expect(body.id).toEqual(id)
    })
  })
  describe('list', () => {
    it('valid request', async () => {
      const res = await request(`/dbs/${databaseId}/colls`, {
        method: 'GET',
        resource: 'colls',
        resourceId: `dbs/${databaseId}`
      })
      expect(res.status).toEqual(200)
      const body = await res.json()
      expect(body.DocumentCollections).toBeDefined()
    })
  })
  describe('get', () => {
    it('valid request', async () => {
      const id = generateId()
      await createContainer(databaseId, id)
      const res = await request(`/dbs/${databaseId}/colls/${id}`, {
        method: 'GET',
        resource: 'colls',
        resourceId: `dbs/${databaseId}/colls/${id}`
      })
      expect(res.status).toEqual(200)
      const body = await res.json()
      expect(body.id).toEqual(id)
    })
  })
  describe('delete', () => {
    it('valid request', async () => {
      const id = generateId()
      await createContainer(databaseId, id)
      const res = await request(`/dbs/${databaseId}/colls/${id}`, {
        method: 'DELETE',
        resource: 'colls',
        resourceId: `dbs/${databaseId}/colls/${id}`
      })
      expect(res.status).toEqual(204)
    })
  })
})
