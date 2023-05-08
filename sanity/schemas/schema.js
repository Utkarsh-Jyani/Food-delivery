import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-types'
import restaurant from './Restaurant'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([restaurant]),
})
