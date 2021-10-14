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
        authorName="Pixabay"
        authorLink="https://www.pexels.com/@pixabay?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels"
        imageLink="https://www.pexels.com/photo/brown-and-white-stallions-running-in-a-field-52500/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels"
      />
    </Stack>
  )
}

export default Page
