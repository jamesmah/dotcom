import AnyoneCanWorkHard from "./AnyoneCanWorkHard"
import AScheduleIsNotAPrison from "./AScheduleIsNotAPrison"
import ThereIsntTime from "./ThereIsntTime"

const allQuotes = [
  AnyoneCanWorkHard,
  ThereIsntTime,
  AScheduleIsNotAPrison,
].sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime())

export default allQuotes
