// @flow
import express from 'express'

import middlewares from './middlewares'

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

app.use(middlewares)


app.listen(PORT, (err: Error) => {
  if (err) throw err
  /* eslint-disable no-console */
  // $FlowFixMe
  console.log(`server started on ${PORT}`)
  /* eslint-enable no-console */
})
