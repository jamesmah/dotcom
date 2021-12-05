import { ArticleData } from "../types"
import AnyoneCanWorkHard from "./AnyoneCanWorkHard"
import AScheduleIsNotAPrison from "./AScheduleIsNotAPrison"
import AtomicHabits from "./AtomicHabits"
import CookieJar from "./CookieJar"
import DoTheDifficultThings from "./DoTheDifficultThings"
import EffectiveWaysToWindDown from "./EffectiveWaysToWindDown"
import EverythingAroundYouThatYouCallLife from "./EverythingAroundYouThatYouCallLife"
import FreeOnlineTeamBuildingGames from "./FreeOnlineTeamBuildingGames"
import GenesDoNotEliminate from "./GenesDoNotEliminate"
import HelloWorld from "./HelloWorld"
import ItsNeverCrowded from "./ItsNeverCrowded"
import MostOfTheMistakeIMade from "./MostOfTheMistakeIMade"
import NonViolentCommunication from "./NonViolentCommunication"
import PayYourselfFirst from "./PayYourselfFirst"
import RememberWhyYouStarted from "./RememberWhyYouStarted"
import StyledComponentsCssProps from "./StyledComponentsCssProps"
import TheBiggestMistakeThatYouCanMake from "./TheBiggestMistakeThatYouCanMake"
import ThereIsntTimeSoBriefIsLife from "./ThereIsntTimeSoBriefIsLife"
import ThreeBreaksToTakeEveryDay from "./ThreeBreaksToTakeEveryDay"
import ThreeQuestionsToAsk from "./ThreeQuestionsToAsk"
import ThreeSecretsOfResilientPeople from "./ThreeSecretsOfResilientPeople"
import TipsForPublicSpeaking from "./TipsForPublicSpeaking"
import ToDoTwoThingsAtOnce from "./ToDoTwoThingsAtOnce"
import TopVsCodeExtensions from "./TopVsCodeExtensions"
import WhenYouFallInLoveWithTheProcess from "./WhenYouFallInLoveWithTheProcess"

export const allDrafts: ArticleData[] = [
  AnyoneCanWorkHard,
  NonViolentCommunication,
  GenesDoNotEliminate,
  EverythingAroundYouThatYouCallLife,
  AtomicHabits,
  ThreeQuestionsToAsk,
  TipsForPublicSpeaking,
  PayYourselfFirst,
  ItsNeverCrowded,
  RememberWhyYouStarted,
  WhenYouFallInLoveWithTheProcess,
  DoTheDifficultThings,
  ToDoTwoThingsAtOnce,
  CookieJar,
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
  ThreeBreaksToTakeEveryDay,
].sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime())

export default allArticles
