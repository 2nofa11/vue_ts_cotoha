// APIレスポンスの表示色ヘルパー
export const colorMap = {
  amber: "amber lighten-4",
  green: "green lighten-4",
  blue: "blue lighten-4",
  gray: "gray lighten-4",
} as const
export type Color = typeof colorMap[keyof typeof colorMap]
