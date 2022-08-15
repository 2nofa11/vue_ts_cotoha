import { colorMap } from "../../types/color.type"
import { Sentiment, sentimentMap } from "../../types/sentiment.type"
import { SentimentInfo } from "../../types/sentimentInfo.type"
jest.mock("axios")
import axios, { AxiosInstance } from "axios"
import {
  analyzeSentimentWtihGAS,
  colorWithSentiment,
} from "./SentimentAnalysisPart.module"
// tslint:disable-next-line:no-any
const myAxios: jest.Mocked<AxiosInstance> = axios as jest.Mocked<typeof axios>
myAxios.get.mockResolvedValue({ data: { Hello: sentimentMap.Neutral } })

describe("analyzeSentimentWtihGASのtest", () => {
  it("Mockを用いたテスト", async () => {
    const res = await analyzeSentimentWtihGAS("")
    expect(res.Hello).toBe("Neutral")
  })
  it("Mockを使わないテスト", async () => {
    const gasURL =
      "https://script.google.com/macros/s/AKfycbwCFRzlEUmjOMIiz5NZF9Gx9uZUMfG9dL_56qzzo6GPpkF0_dSoeY4-mpTbCT3pOPCG/exec"
    const inputText = "Neutralかのテスト"
    const url = `${gasURL}?text=${inputText}`
    await analyzeSentimentWtihGAS(url).then((res) =>
      expect(res.Hello).toBe("Neutral")
    )
  })
})

describe("colorWithSentimentのテスト", (): void => {
  test("Sentimentがネガティブ⇒色Blue、タイトル「悲観的な文章です...」を返却", (): void => {
    const negative: Sentiment = sentimentMap.Negative
    const response: SentimentInfo = colorWithSentiment(negative)
    const expected: SentimentInfo = {
      color: colorMap.blue,
      title: "悲観的な文章です...",
    }
    expect(response).toStrictEqual(expected)
  })
  test("Sentimentがポジティブ⇒色Amber、タイトル「元気になる文章です!!」を返却", (): void => {
    const positive: Sentiment = sentimentMap.Positive
    const response: SentimentInfo = colorWithSentiment(positive)
    const expected: SentimentInfo = {
      color: colorMap.amber,
      title: "元気になる文章です!!",
    }
    expect(response).toStrictEqual(expected)
  })
  test("Sentimentがニュートラル⇒色Green、タイトル「元気になる文章です!!」を返却", (): void => {
    const neutral: Sentiment = sentimentMap.Neutral
    const response: SentimentInfo = colorWithSentiment(neutral)
    const expected: SentimentInfo = {
      color: colorMap.green,
      title: "ノーマルな文章です",
    }
    expect(response).toStrictEqual(expected)
  })
  test("Sentimentが帰ってこなかった場合、タイトル「不正な値です。」を返却", (): void => {
    const response: SentimentInfo = colorWithSentiment(undefined as any)
    const expected: SentimentInfo = {
      color: colorMap.gray,
      title: "不正な値です。",
    }
    expect(response).toStrictEqual(expected)
  })
})
