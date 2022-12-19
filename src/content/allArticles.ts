import { ArticleData, Tag } from "../types"

const modules = import.meta.globEager(`./**/index.tsx`)
const articles: ArticleData[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime())

export const allArticles = articles.filter((a) => !a.tags.includes(Tag.Dev))
