import { is_correctTextInfo } from "./SubmitForm.module"

describe("is_correctTextInfoのテスト", (): void => {
  test("入力値（空）、規定値（既定文）だった場合はTRUEを返却", (): void => {
    const response: boolean = is_correctTextInfo("", "既定文")
    expect(response).toBe(true)
  }),
    test("入力値（入力値）、規定値（既定文）だった場合はFALSEを返却", (): void => {
      const response: boolean = is_correctTextInfo("入力値", "既定文")
      expect(response).toBe(false)
    }),
    test("入力値（既定文）、規定値（既定文）だった場合はTRUEを返却", (): void => {
      const response: boolean = is_correctTextInfo("既定文", "既定文")
      expect(response).toBe(true)
    })
})
