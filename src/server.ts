import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { getDatabaseAccount } from './handlers/getDatabaseAccount'
import { notSupported } from './handlers/notSupported'
import { checkAuthHeader } from './middleware/checkAuthHeader'
import { checkAPIVersionHeader } from './middleware/checkAPIVersionHeader'
import { createDatabase } from './handlers/createDatabase'
import { getDatabase } from './handlers/getDatabase'
import { listDatabases } from './handlers/listDatabases'
import { deleteDatabase } from './handlers/deleteDatabase'
import { createContainer } from './handlers/createContainer'
import { getContainer } from './handlers/getContainer'
import { deleteContainer } from './handlers/deleteContainer'
import { listContainers } from './handlers/listContainers'
import { listItems } from './handlers/listItems'
import { createItem } from './handlers/createItem'
import { getItem } from './handlers/getItem'
import { deleteItem } from './handlers/deleteItem'

const app = express()

// Setup Loggin
app.use(morgan('dev'))
app.use(json({ type: '*/*' }))

// Enable CORS
app.use(cors())

// Check for Authorization Header
app.use(checkAuthHeader())

// Check for valid API version
app.use(checkAPIVersionHeader())

// Database Account
app.get('/', getDatabaseAccount)

// Databases
app.get('/dbs', listDatabases)
app.post('/dbs', createDatabase)
app.get('/dbs/:database', getDatabase)
app.delete('/dbs/:database', deleteDatabase)

// Containers
app.get('/dbs/:database/colls', listContainers)
app.post('/dbs/:database/colls', createContainer)
app.get('/dbs/:database/colls/:container', getContainer)
// app.put('/dbs/:database/colls/:container', notYetSupported)
app.delete('/dbs/:database/colls/:container', deleteContainer)

// Items
app.get('/dbs/:database/colls/:container/docs', listItems)
app.post('/dbs/:database/colls/:container/docs', createItem)
app.get('/dbs/:database/colls/:container/docs/:id', getItem)
// app.put('/dbs/:database/colls/:container/docs/:id', notYetSupported)
app.delete('/dbs/:database/colls/:container/docs/:id', deleteItem)

// Not supported
app.all('/dbs/:database/users/', notSupported)
app.all('/dbs/:database/users/:user', notSupported)
app.all('/dbs/:database/users/:user/permissions', notSupported)
app.all('/dbs/:database/users/:user/permissions/:permission', notSupported)
app.all('/dbs/:database/colls/:container/triggers/', notSupported)
app.all('/dbs/:database/colls/:container/triggers/:trigger', notSupported)
app.all('/dbs/:database/colls/:container/sprocs/', notSupported)
app.all('/dbs/:database/colls/:container/sprocs/:sproc', notSupported)
app.all('/dbs/:database/colls/:container/udfs/', notSupported)
app.all('/dbs/:database/colls/:container/udfs/:udf', notSupported)
app.all('/offers/', notSupported)
app.all('/offers/:offer', notSupported)
app.all('/dbs/:database/colls/:container/docs/:doc/attachments/', notSupported)
app.all(
  '/dbs/:database/colls/:container/docs/:doc/attachments/:attachment',
  notSupported
)

export { app }
