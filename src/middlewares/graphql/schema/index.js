import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './typeDefs'

import Query from './query'

import endpoints from './endpoints'
import * as typeResolvers from './resolvers'

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers: merge({ Query }, typeResolvers),
})

export default executableSchema

export const contextProvider = (urls) => endpoints(urls)
