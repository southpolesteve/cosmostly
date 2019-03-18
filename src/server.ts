import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { getDatabaseAccount } from './handlers/getDatabaseAccount'
import { notSupported } from './handlers/notSupported'
import { checkAuthHeader } from './middleware/checkAuthHeader'
import { checkAPIVersionHeader } from './middleware/checkAPIVersionHeader'
import * as database from './handlers/database'
import * as container from './handlers/container'
import * as item from './handlers/item'

const app = express()

// Setup Logging
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
app.get('/dbs', database.list)
app.post('/dbs', database.create)
app.get('/dbs/:database', database.get)
app.delete('/dbs/:database', database.destroy)

// Containers
app.get('/dbs/:database/colls', container.list)
app.post('/dbs/:database/colls', container.create)
app.get('/dbs/:database/colls/:container', container.get)
app.put('/dbs/:database/colls/:container', container.replace)
app.delete('/dbs/:database/colls/:container', container.destroy)

// Items
app.get('/dbs/:database/colls/:container/docs', item.list)
app.post('/dbs/:database/colls/:container/docs', item.create)
app.get('/dbs/:database/colls/:container/docs/:id', item.get)
app.put('/dbs/:database/colls/:container/docs/:id', item.replace)
app.delete('/dbs/:database/colls/:container/docs/:id', item.destroy)

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
