import { colorMap } from "../../types/color.type"
import { Sentiment, sentimentMap } from "../../types/sentiment.type"
import { SentimentInfo } from "../../types/sentimentInfo.type"
import { is_correctTextInfo, colorWithSentiment } from "./SubmitForm.module"

describe("is_correctTextInfoのテスト", (): void => {
  test("入力値（空）、規定値（既定文）だった場合はTRUEを返却", (): void => {
    const response: boolean = is_correctTextInfo("", "既定文")
    expect(response).toBe(true)
  })
  test("入力値（入力値）、規定値（既定文）だった場合はFALSEを返却", (): void => {
    const response: boolean = is_correctTextInfo("入力値", "既定文")
    expect(response).toBe(false)
  })
  test("入力値（既定文）、規定値（既定文）だった場合はTRUEを返却", (): void => {
    const response: boolean = is_correctTextInfo("既定文", "既定文")
    expect(response).toBe(true)
  })
  test("Sentimentがネガティブ⇒色：Blue、タイトル「悲観的な文章です...」を返却", (): void => {
    const negative: Sentiment = sentimentMap.Negative
    const response: SentimentInfo = colorWithSentiment(negative)
    const expected: SentimentInfo = {
      color: colorMap.blue,
      title: "悲観的な文章です...",
    }
    expect(response).toStrictEqual(expected)
  })
})
