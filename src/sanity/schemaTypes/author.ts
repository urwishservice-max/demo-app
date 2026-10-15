import { defineType, defineField } from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author / Leadership',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort leadership members (e.g. 1 for Managing Partner, 2, 3...)',
      validation: (Rule) => Rule.positive().integer(),
    }),
    defineField({
      name: 'isLeadership',
      title: 'Display on Leadership Section',
      type: 'boolean',
      initialValue: true,
      description: 'Enable to feature this person in the Leadership section on the About page.',
    }),
    defineField({
      name: 'image',
      title: 'Professional Photograph',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'biography',
      title: 'Biography (150-200 words)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.email().error('Please enter a valid email address'),
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'X / Twitter Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website / Portfolio URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
      order: 'order',
    },
    prepare(selection) {
      const { title, subtitle, media, order } = selection
      return {
        title,
        subtitle: order !== undefined ? `#${order} · ${subtitle || ''}` : subtitle,
        media,
      }
    },
  },
})

