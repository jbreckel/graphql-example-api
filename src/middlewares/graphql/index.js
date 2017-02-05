// @flow

import { Router } from 'express'
import bodyParser from 'body-parser'

import type { $Request } from 'express'
import type { GraphQLError } from 'graphql/error'

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'

import schema from './schema'

export default Router()
  .use('/graphql',
    bodyParser.json(),
    graphqlExpress((request: $Request) => ({
      context: {
        request,
      },
      schema,
      rootValue: { request },
      formatError: (error: GraphQLError) => ({
        message: error.message,
        details: error.stack,
      }),
    })),
  )
  .use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }))
