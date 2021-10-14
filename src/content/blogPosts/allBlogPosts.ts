import HelloWorld from "./HelloWorld"

const allBlogPosts = [HelloWorld].sort(
  (a, b) => b.timeStamp.getTime() - a.timeStamp.getTime()
)

export default allBlogPosts
