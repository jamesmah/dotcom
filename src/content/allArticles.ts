import { ArticleData } from "../types"
import AnyoneCanWorkHard from "./AnyoneCanWorkHard"
import AScheduleIsNotAPrison from "./AScheduleIsNotAPrison"
import BreaksToTakeEveryDay from "./BreaksToTakeEveryDay"
import EffectiveWaysToWindDown from "./EffectiveWaysToWindDown"
import EverythingAroundYouThatYouCallLife from "./EverythingAroundYouThatYouCallLife"
import FreeOnlineTeamBuildingGames from "./FreeOnlineTeamBuildingGames"
import GenesDoNotEliminate from "./GenesDoNotEliminate"
import HelloWorld from "./HelloWorld"
import MostOfTheMistakeIMade from "./MostOfTheMistakeIMade"
import NonviolentCommunication from "./NonviolentCommunication"
import RememberWhyYouStarted from "./RememberWhyYouStarted"
import StyledComponentsCssProps from "./StyledComponentsCssProps"
import TheBiggestMistakeThatYouCanMake from "./TheBiggestMistakeThatYouCanMake"
import ThereIsntTimeSoBriefIsLife from "./ThereIsntTimeSoBriefIsLife"
import ThreeSecretsOfResilientPeople from "./ThreeSecretsOfResilientPeople"
import TopVsCodeExtensions from "./TopVsCodeExtensions"

export const allDrafts: ArticleData[] = [
  GenesDoNotEliminate,
  RememberWhyYouStarted,
]

const allArticles: ArticleData[] = [
  HelloWorld,
  ThereIsntTimeSoBriefIsLife,
  TopVsCodeExtensions,
  AScheduleIsNotAPrison,
  StyledComponentsCssProps,
  TheBiggestMistakeThatYouCanMake,
  FreeOnlineTeamBuildingGames,
  ThreeSecretsOfResilientPeople,
  EffectiveWaysToWindDown,
  MostOfTheMistakeIMade,
  BreaksToTakeEveryDay,
  NonviolentCommunication,
  EverythingAroundYouThatYouCallLife,
  AnyoneCanWorkHard,
].sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime())

export default allArticles
