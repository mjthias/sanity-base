export function toUrlSafe(str: string): string {
  const urlSafe = str
    .toLowerCase()
    .replaceAll('æ', 'ae')
    .replaceAll('ø', 'oe')
    .replaceAll('å', 'aa')
    .replaceAll(' ', '-')
    .replaceAll(/[^a-z0-9\-]/g, '')
  return urlSafe
}
