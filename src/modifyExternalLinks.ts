export const modifyExternalLinks = async (
  uuid: string,
  allExternal = false
) => {
  const modified: Element[] = []
  const links = document.querySelectorAll("a[href^='https']")
  links.forEach(link => {
    if (allExternal || link.getAttribute("data-lc")) {
      const originalHref = link.getAttribute("href")
      if (originalHref) {
        const url = new URL(originalHref)
        url.searchParams.set("lck", uuid)
        link.setAttribute("href", url.toString())
        modified.push(link)
      }
    }
  })
  return modified
}
