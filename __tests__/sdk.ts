import { CosmosClient } from '@azure/cosmos'
import { url, generateId } from './helper'
import { EMULATOR_KEY } from '../src/constants'
import assert from 'assert'

const client = new CosmosClient({
  endpoint: url,
  auth: {
    masterKey: EMULATOR_KEY
  }
})

describe('JavaScript SDK Integration', () => {
  it('CRUD', async () => {
    const databaseId = generateId()
    await client.databases.create({ id: databaseId })
    await client.database(databaseId).read()

    const containerId = generateId()
    await client.databases.create({ id: containerId })
    await client.database(containerId).containers.create({ id: containerId })

    const itemId = generateId()
    await client.databases.create({ id: containerId })
    const response = await client
      .database(containerId)
      .container(containerId)
      .items.create({ id: itemId, name: 'Steve' })

    assert.equal(response.resource.name, 'Steve')

    await client
      .database(databaseId)
      .container(containerId)
      .item(itemId)
      .delete()

    await client
      .database(databaseId)
      .container(containerId)
      .delete()

    await client.database(databaseId).delete()
  })
})
