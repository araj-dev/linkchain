import { get } from "./api"
import { LinkChain } from "./entity"

/*
    This file is used to initialize linkchain in the browser.
    Get the data from the server and store it in the in-memory store.
    Key is in query string.
 */
export const initializeData = async (linkChain: LinkChain) => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const key = urlParams.get("lck")
  if (!key) {
    return linkChain
  }

  linkChain.key = key

  const data = await receiveWithKey(key)

  if (data) {
    linkChain.data = data
    linkChain.isReceived = true
    return linkChain
  }

  return linkChain
}

const receiveWithKey = async (key: string) => {
  let data = null
  if (!key) {
    return null
  } else {
    const res = await get(key)
    if (res) {
      data = res
    } else {
      data = null
    }
  }
  return data
}
