import { ArticleData } from "../types"

const modules = import.meta.globEager(`./**/index.tsx`)
export const allDrafts: ArticleData[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime())
