const lockedServicePages = new Set([
  "/services/human-data-collection",
  "/services/general-transcription",
  "/services/image-annotation",
  "/services/prompt-creation-and-response",
  "/services/multilingual-indian-language-translation",
])

export function publicPageHref(href: string) {
  const path = href.split(/[?#]/)[0]
  return lockedServicePages.has(path) ? undefined : href
}
