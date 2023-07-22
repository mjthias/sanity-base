import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'
import {localPreviewHost, productionPreviewHost, previewToken} from '../env'

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

interface SluggedSanityDocument extends SanityDocument {
  slug?: {
    current?: string
  }
}

function resolvePreviewUrl(doc: SluggedSanityDocument) {
  const baseUrl = window.location.hostname == 'localhost' ? localPreviewHost : productionPreviewHost
  const urlPath = doc?.slug?.current ?? ''
  return `${baseUrl}/api/preview?redirect=/${urlPath}&token=${previewToken}`
}
