import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './category'
import { authorType } from './author'
import { insightType } from './insight'
import { siteSettingsType } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, authorType, insightType, siteSettingsType],
}

