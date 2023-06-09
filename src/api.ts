const API_HOST = "lc.araj.jp/api"
const SET_ENDPOINT = `https://${API_HOST}/set`
const GET_ENDPOINT = `https://${API_HOST}/get`

export const set = async (key: string, data: any) => {
  const response = await fetch(`${SET_ENDPOINT}?lck=${key}`, {
    method: "POST",
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  response.text().then(() => {
    return null
  })
  return
}

export const get = async (key: string) => {
  const response = await fetch(`${GET_ENDPOINT}?lck=${key}`)
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}
