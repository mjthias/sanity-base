import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'frontpage',
  type: 'document',
  title: 'Frontpage',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
