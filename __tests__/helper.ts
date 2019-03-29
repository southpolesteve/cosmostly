import fetch from 'node-fetch'
import https, { Agent } from 'https'
import { EMULATOR_KEY } from '../src/constants'
import { generateHeaders } from '@azure/cosmos-sign'
import { randomBytes } from 'crypto'

export const url = process.env.EMULATOR_URL || 'https://localhost:8081'

let agent: Agent
if (url.includes('https:')) {
  agent = new https.Agent({
    rejectUnauthorized: false
  })
}

interface Options {
  method?: Parameters<typeof generateHeaders>[1]
  headers?: any
  body?: any
  resource?: Parameters<typeof generateHeaders>[2]
  resourceId?: string
}

export const generateId = () => randomBytes(4).toString('hex')

export const createDatabase = (id?: string) => {
  if (!id) id = generateId()
  return request('/dbs', {
    method: 'POST',
    body: JSON.stringify({ id }),
    resource: 'dbs'
  })
}

export const deleteDatabase = (id: string) => {
  return request(`/dbs/${id}`, {
    method: 'DELETE',
    resource: 'dbs',
    resourceId: `dbs/${id}`
  })
}

export const createContainer = (databaseId: string, id?: string) => {
  if (!id) id = generateId()
  return request(`/dbs/${databaseId}/colls`, {
    method: 'POST',
    body: JSON.stringify({ id }),
    resource: 'colls',
    resourceId: `dbs/${databaseId}`
  })
}

export const deleteContainer = (databaseId: string, id: string) => {
  return request(`/dbs/${databaseId}/colls/${id}`, {
    method: 'DELETE',
    resource: 'colls',
    resourceId: `dbs/${databaseId}/colls/${id}`
  })
}

export const createItem = (
  databaseId: string,
  containerId: string,
  id: string = generateId(),
  attributes: any = {}
) => {
  return request(`/dbs/${databaseId}/colls/${containerId}/docs`, {
    method: 'POST',
    body: JSON.stringify({ id, ...attributes }),
    resource: 'docs',
    resourceId: `dbs/${databaseId}/colls/${containerId}`
  })
}

export async function request(path: string, options: Options = {}) {
  if (!options.method) {
    options.method = 'GET'
  }
  if (!options.headers) {
    options.headers = {
      ...generateHeaders(
        EMULATOR_KEY,
        options.method,
        options.resource,
        options.resourceId
      ),
      'x-ms-version': '2017-02-22'
    }
  }
  return fetch(url + path, { agent, ...options })
}
