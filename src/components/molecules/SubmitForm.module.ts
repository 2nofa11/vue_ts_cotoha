// テキストが空文字または、想定された禁止文字列だった場合はTRUEを返却
export const is_correctTextInfo = (inputText: string, defaultText: string) => {
  return inputText == "" || inputText == defaultText ? true : false
}
