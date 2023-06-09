import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: true,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `个人终身版
- 编程，文案，脚本，数据分析，数据统计，各种语言翻译，娱乐
- 陪聊，陪伴，娱乐，学习工作两不误！
- 注意事项：不要同时两个ip登录，一旦检测到就容易封号
==================================
-[[Shift]] + [[Enter]] 换行。开头输入 [[/]]提问辅助`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
