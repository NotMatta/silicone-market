const { readFileSync } = require('fs')
const typeDefs = readFileSync(require.resolve('./type-defs.graphql')).toString('utf-8')

module.exports = {typeDefs}

