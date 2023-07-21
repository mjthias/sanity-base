import {defineType, defineField, defineArrayMember} from 'sanity'
import {toUrlSafe} from '../../lib/helpers'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: toUrlSafe,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textBlock',
          type: 'textBlock',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: {collapsible: true, collapsed: true},
    }),
  ],
})
