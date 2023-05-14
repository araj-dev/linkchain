export const modifyExternalLinks = async (
  uuid: string,
  allExternal = false
) => {
  const modified: Element[] = []
  const links = document.querySelectorAll("a")
  links.forEach(link => {
    if (allExternal || link.dataset.lc == "true") {
      const originalHref = link.getAttribute("href")
      if (originalHref) {
        if (originalHref.startsWith("http")) {
          const url = new URL(originalHref)
          url.searchParams.set("lck", uuid)
          link.setAttribute("href", url.toString())
        } else {
          const p = new URLSearchParams()
          p.set("lck", uuid)
          link.setAttribute("href", `${originalHref}?${p.toString()}`)
        }
        modified.push(link)
      }
    }
  })
  return modified
}
