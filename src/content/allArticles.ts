import { ArticleData, Tag } from "../types"

const modules = import.meta.globEager(`./**/index.tsx`)
const articles: ArticleData[] = Object.values(modules)
  .map((m) => m.default)
  .filter((a: ArticleData) => !a.tags.includes(Tag.Dev))
  .sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime())

export const allArticles = articles
