module.exports = {
  extends: 'signavio',
  rules: {
    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: ['**/src/babel.js'],
    }],
    // 'graphql/template-strings': ['error', {
    //   // Import default settings for your GraphQL client. Supported values:
    //   // 'apollo', 'relay', 'lokka'
    //   env: 'apollo',
    //
    //   // Import your schema JSON here
    //   schemaJson: require('./src/middlewares/graphql/generated/schema.json'),
    //
    //   // tagName is gql by default
    // }],
  },
  plugins: [
    'graphql'
  ],
}
