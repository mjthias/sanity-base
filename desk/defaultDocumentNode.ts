import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case 'page':
    case 'frontpage':
      // Add prview document types here
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => resolvePreviewUrl(doc),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}

function resolvePreviewUrl(doc: any) {
  const baseUrl = window.location.origin
  const urlPath = doc?.slug?.current ?? ''
  const previewToken = process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN
  return `${baseUrl}/api/preview?redirect=/${urlPath}&token=${previewToken}`
}
