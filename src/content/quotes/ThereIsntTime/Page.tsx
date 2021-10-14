import ImageAuthor from "../../../components/elements/ImageAuthor"
import Stack from "../../../components/elements/Stack"
import data from "."

const Page = () => {
  return (
    <Stack gap="1rem">
      <blockquote data-aos="fade-right">
        <q>{data.quoteText}</q>
      </blockquote>

      <ImageAuthor
        image={data.image}
        authorName="Francesco Ungaro"
        authorLink="https://www.pexels.com/@francesco-ungaro"
        imageLink="https://www.pexels.com/photo/hot-air-ballons-in-the-sky-2325446/"
      />
    </Stack>
  )
}

export default Page
