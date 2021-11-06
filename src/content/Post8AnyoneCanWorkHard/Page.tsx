import ImageAuthor from "../../components/elements/ImageAuthor"
import Stack from "../../components/elements/Stack"
import data from "."

const Page = () => {
  return (
    <Stack
      css={`
        padding-top: 1rem;
      `}
      data-aos={`fade`}
      gap={`1rem`}
    >
      <blockquote data-aos={`fade-right`}>
        <q>{data.quote}</q>
      </blockquote>

      <ImageAuthor
        authorLink={`https://www.pexels.com/@pixabay?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels`}
        authorName={`Pixabay`}
        image={data.image}
        imageLink={`https://www.pexels.com/photo/brown-and-white-stallions-running-in-a-field-52500/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels`}
      />
    </Stack>
  )
}

export default Page
