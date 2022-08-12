export const sentimentMap = {
  Negative: "Negative",
  Positive: "Positive",
  Neutral: "Neutral",
} as const
export type Sentiment = typeof sentimentMap[keyof typeof sentimentMap]
