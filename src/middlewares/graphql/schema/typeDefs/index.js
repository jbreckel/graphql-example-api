// @flow
import { readFileSync } from 'fs'
import { resolve } from 'path'

const Query = readFileSync(resolve(__dirname, './Query.graphql'), 'utf8')
const HelloWorld = readFileSync(resolve(__dirname, './HelloWorld.graphql'), 'utf8')

export default [
  Query,
  HelloWorld,
]
