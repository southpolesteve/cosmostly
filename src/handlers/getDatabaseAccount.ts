import { Request, Response } from 'express'

export function getDatabaseAccount(_: Request, response: Response) {
  response.json({
    _self: '',
    id: 'localhost',
    _rid: '137.135.109.144',
    media: '//media/',
    addresses: '//addresses/',
    _dbs: '//dbs/',
    writableLocations: [
      {
        name: 'South Central US',
        databaseAccountEndpoint: 'https://10.0.0.6:8081/'
      }
    ],
    readableLocations: [
      {
        name: 'South Central US',
        databaseAccountEndpoint: 'https://10.0.0.6:8081/'
      }
    ],
    userReplicationPolicy: {
      asyncReplication: false,
      minReplicaSetSize: 1,
      maxReplicasetSize: 4
    },
    userConsistencyPolicy: { defaultConsistencyLevel: 'Session' },
    systemReplicationPolicy: { minReplicaSetSize: 1, maxReplicasetSize: 4 },
    readPolicy: { primaryReadCoefficient: 1, secondaryReadCoefficient: 1 },
    queryEngineConfiguration:
      '{"maxSqlQueryInputLength":262144,"maxJoinsPerSqlQuery":5,"maxLogicalAndPerSqlQuery":500,"maxLogicalOrPerSqlQuery":500,"maxUdfRefPerSqlQuery":10,"maxInExpressionItemsCount":16000,"queryMaxInMemorySortDocumentCount":500,"maxQueryRequestTimeoutFraction":0.9,"sqlAllowNonFiniteNumbers":false,"sqlAllowAggregateFunctions":true,"sqlAllowSubQuery":true,"sqlAllowScalarSubQuery":true,"allowNewKeywords":true,"sqlAllowLike":false,"sqlAllowGroupByClause":false,"maxSpatialQueryCells":12,"spatialMaxGeometryPointCount":256,"sqlAllowTop":true,"enableSpatialIndexing":true}'
  })
}
