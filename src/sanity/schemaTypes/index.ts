import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './category'
import { authorType } from './author'
import { insightType } from './insight'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, authorType, insightType],
}
