// @flow

import { Router } from 'express'
import type { $Request, $Response } from 'express'

import graphqlRouter from './graphql'

export default Router()
  .use(graphqlRouter)
  .use('*', (req: $Request, res: $Response) => {
    res.status(200)
    res.send('Hello World!')
  })
