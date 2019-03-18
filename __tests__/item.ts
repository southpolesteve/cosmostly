import {
  request,
  generateId,
  createDatabase,
  createContainer,
  createItem,
  deleteDatabase
} from './helper'

describe('Items', () => {
  let databaseId: string = generateId()
  let containerId: string = generateId()
  beforeAll(async () => {
    await createDatabase(databaseId)
    await createContainer(databaseId, containerId)
  })
  afterAll(async () => {
    await deleteDatabase(databaseId)
  })
  describe('create', () => {
    it('valid request', async () => {
      const id = generateId()
      const res = await createItem(databaseId, containerId, id, { foo: 'bar' })
      const body = await res.json()
      expect(res.status).toEqual(201)
      expect(body.id).toEqual(id)
      expect(body.foo).toEqual('bar')
    })
  })
  describe('list', () => {
    it('valid request', async () => {
      const res = await request(
        `/dbs/${databaseId}/colls/${containerId}/docs`,
        {
          method: 'GET',
          resource: 'docs',
          resourceId: `dbs/${databaseId}/colls/${containerId}`
        }
      )
      expect(res.status).toEqual(200)
      const body = await res.json()
      expect(body.Documents).toBeDefined()
    })
  })
  describe('get', () => {
    it('valid request', async () => {
      const id = generateId()
      await createItem(databaseId, containerId, id)
      const res = await request(
        `/dbs/${databaseId}/colls/${containerId}/docs/${id}`,
        {
          method: 'GET',
          resource: 'docs',
          resourceId: `dbs/${databaseId}/colls/${containerId}/docs/${id}`
        }
      )
      expect(res.status).toEqual(200)
      const body = await res.json()
      expect(body.id).toEqual(id)
    })
  })
  describe('replace', () => {
    it('valid request', async () => {
      const id = generateId()
      await createItem(databaseId, containerId, id)
      const res = await request(
        `/dbs/${databaseId}/colls/${containerId}/docs/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ id, foo: 'baz' }),
          resource: 'docs',
          resourceId: `dbs/${databaseId}/colls/${containerId}/docs/${id}`
        }
      )
      const body = await res.json()
      expect(res.status).toEqual(200)
      expect(body.id).toEqual(id)
      expect(body.foo).toEqual('baz')
    })
  })
  describe('delete', () => {
    it('valid request', async () => {
      const id = generateId()
      await createItem(databaseId, containerId, id)
      const res = await request(
        `/dbs/${databaseId}/colls/${containerId}/docs/${id}`,
        {
          method: 'DELETE',
          resource: 'docs',
          resourceId: `dbs/${databaseId}/colls/${containerId}/docs/${id}`
        }
      )
      expect(res.status).toEqual(204)
    })
  })
})
