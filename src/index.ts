import { ready } from "./ready"
import { initializeData } from "./initializeData"
import { getDefault } from "./entity"
import { modifyExternalLinks } from "./modifyExternalLinks"
import { set } from "./api"

const lcd = getDefault()
const uuid = crypto.randomUUID()
lcd.set = (data: unknown) => set(uuid, data)

ready(() => {
  initializeData(lcd).then(lc => {
    if (typeof window.linkchain?.ready === "function") {
      window.linkchain.ready(lc)
    }
  })

  modifyExternalLinks(uuid, false).then(modified => {
    if (typeof window.linkchain?.linkReady === "function") {
      window.linkchain.linkReady(modified)
    }
  })
})
