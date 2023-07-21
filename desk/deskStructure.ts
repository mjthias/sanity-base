// Types
import {StructureBuilder} from 'sanity/desk'
import {DocumentIcon} from '@sanity/icons'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      // Frontpage
      S.documentListItem()
        .title('Frontpage')
        .schemaType('frontpage')
        .id('773862bb-7df1-43c4-9b0f-1a4d125acee6'),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(DocumentIcon)
        .child(S.documentList().title(`Pages`).schemaType('page').filter('_type == "page"')),
      S.divider(),
    ])
