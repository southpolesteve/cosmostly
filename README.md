# Cosmostly

### ⚠️ WARNING: THIS IS NOT READY TO USE AND UNDER HEAVY DEVELOPMENT ⚠️

### Use https://github.com/zeit/cosmosdb-server instead of this project

[![Build Status](https://dev.azure.com/stfaul/Cosmostly/_apis/build/status/Cosmostly-CI?branchName=master)](https://dev.azure.com/stfaul/Cosmostly/_build/latest?definitionId=2&branchName=master)

A minimal JavaScript emulator for Cosmos DB SQL API. If you need full accuracy use the [offical emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator)

## Quick Start

```bash
npm install -g cosmostly
cosmostly
```

## Supported Features

- [ ] Authentication
- [ ] CORS
- [x] DatabaseAccount
- [x] Databases
  - [x] Create
  - [x] Read
  - [x] Delete
  - [x] List
- [x] Containers
  - [x] Create
  - [x] Read
  - [ ] Update
  - [x] Delete
  - [x] List
- [x] Items
  - [x] Create
  - [x] Read
  - [ ] Update
  - [x] Delete
  - [ ] Query

## Unsupported Features

These are features currently not in scope. They may never be supported. If you need them, use the [offical emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator)

- Attachments
- Stored Procedures
- User Defined Functions
- Triggers
- Users
- Permissions
- Offers
- Consistency Settings
- Persistence
