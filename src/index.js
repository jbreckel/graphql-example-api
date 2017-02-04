// @flow
import express from 'express'
import type { $Request, $Response } from 'express'

const {
  PORT,
} = process.env

if (!PORT) {
  /* eslint-disable no-console */
  console.log('PORT needs to be set as environment.')
  console.log('Got', PORT)
  /* eslint-enable no-console */
  process.exit(1)
}

const app = express()

app.use('/graphql', (req: $Request, res: $Response) => {
  res.status(200)
  res.send('Hello GraphlQL!')
})

app.use('/graphiql', (req: $Request, res: $Response) => {
  res.status(200)
  res.send('Hello GraphlIQL!')
})

app.use('*', (req: $Request, res: $Response) => {
  res.status(200)
  res.send('Hello World!')
})

app.listen(PORT, (err: Error) => {
  if (err) throw err
  /* eslint-disable no-console */
  // $FlowFixMe
  console.log(`server started on ${PORT}`)
  /* eslint-enable no-console */
})
