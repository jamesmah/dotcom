import AnyoneCanWorkHard from "./AnyoneCanWorkHard"
import AScheduleIsNotAPrison from "./AScheduleIsNotAPrison"
import HelloWorld from "./HelloWorld"
import ThereIsntTimeSoBriefIsLife from "./ThereIsntTimeSoBriefIsLife"

const allArticles = [
  AnyoneCanWorkHard,
  AScheduleIsNotAPrison,
  ThereIsntTimeSoBriefIsLife,
  HelloWorld,
].sort((a, b) => {
  if (a.draft === b.draft) {
    return b.timeStamp.getTime() - a.timeStamp.getTime()
  }
  if (a.draft) return -1
  return 1
})

export default allArticles
