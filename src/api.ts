const API_HOST = "localhost:3000/api"
const SET_ENDPOINT = `http://${API_HOST}/set`
const GET_ENDPOINT = `http://${API_HOST}/get`

export const set = async (key: string, data: any) => {
  const response = await fetch(`${SET_ENDPOINT}?lck=${key}`, {
    method: "POST",
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}

export const get = async (key: string) => {
  const response = await fetch(`${GET_ENDPOINT}?lck=${key}`)
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  console.log(response.body)
  return response.text()
}
