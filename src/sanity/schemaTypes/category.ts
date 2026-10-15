import { defineType, defineField } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort categories on the Insights page (e.g. 1, 2, 3...)',
      validation: (Rule) => Rule.positive().integer(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Internal or public description for this category.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title,
        subtitle: order ? `#${order} · /${subtitle || ''}` : `/${subtitle || ''}`,
      }
    },
  },
})
