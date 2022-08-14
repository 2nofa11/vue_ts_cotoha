// テキストが空文字または、想定された禁止文字列だった場合はTRUEを返却
export const is_correctTextInfo = (inputText: string, defaultText: string) => {
  return inputText == "" || inputText == defaultText ? true : false
}

import { colorMap } from "../../types/color.type"
import { Sentiment, sentimentMap } from "../../types/sentiment.type"
import { SentimentInfo } from "../../types/sentimentInfo.type"

export const colorWithSentiment = (sentiment: Sentiment): SentimentInfo => {
  switch (sentiment) {
    case sentimentMap.Negative:
      return {
        color: colorMap.blue,
        title: "悲観的な文章です...",
      }
    case sentimentMap.Positive:
      return {
        color: colorMap.amber,
        title: "元気になる文章です!!",
      }
    case sentimentMap.Neutral:
      return {
        color: colorMap.green,
        title: "ノーマルな文章です",
      }
    default:
      return {
        color: colorMap.gray,
        title: "不正な値です。",
      }
  }
}

import axios from "axios"
// CROSになってしまうため仕方なくjsonpを利用
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axiosJsonpAdapter = require("axios-jsonp")

export async function analyzeSentimentWtihGAS(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { adapter: axiosJsonpAdapter })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response))
  })
}
