import {defineType, defineField} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'portableText',
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare({title}) {
      return {
        title: title[0].children[0].text,
        subtitle: 'Text Block',
        media: BlockContentIcon,
      }
    },
  },
})
