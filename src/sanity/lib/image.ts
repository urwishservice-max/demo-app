import { createImageUrlBuilder } from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: unknown) => {
  if (!source) return undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return imageBuilder.image(source as any).auto('format').fit('max').url()
}
