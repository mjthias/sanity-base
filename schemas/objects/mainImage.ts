import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mainImage',
  title: 'Main image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Important for SEO and accessiblity.',
    }),
  ],
})
