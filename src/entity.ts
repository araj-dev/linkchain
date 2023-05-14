export type LinkChain = {
  key: string
  data: unknown
  isReceived: boolean
  ready?: (lc: LinkChain) => void
  linkReady?: (ea: Element[]) => void
  set?: (data: any) => Promise<void>
}

export const getDefault = (): LinkChain => {
  return {
    key: "",
    data: {},
    isReceived: false,
  }
}
