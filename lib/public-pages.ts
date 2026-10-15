export function publicPageHref(href: string) {
  const path = href.split(/[?#]/)[0]
  return !href.startsWith("/") || path === "/" || path === "/contact" || path.startsWith("/services/")
    ? href
    : undefined
}
