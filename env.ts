export const projectId: string = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
)

export const dataset: string = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_STUDIO_DATASET'
)

export const useCdn: boolean | string = assertValue(
  process.env.SANITY_STUDIO_USE_CDN,
  'Missing environment variable: SANITY_STUDIO_USE_CDN'
)

export const localPreviewHost: string = assertValue(
  process.env.SANITY_STUDIO_LOCAL_PREVIEW_HOST,
  'Missing environtment variable: SANITY_STUDIO_LOCAL_PREVIEW_HOST'
)

export const productionPreviewHost: string = assertValue(
  process.env.SANITY_STUDIO_PRODUCTION_PREVIEW_HOST,
  'Missing environtment variable: SANITY_STUDIO_PRODUCTION_PREVIEW_HOST'
)

export const previewToken: string = assertValue(
  process.env.SANITY_STUDIO_PREVIEW_TOKEN,
  'Missing environtment variable: SANITY_STUDIO_PREVIEW_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
