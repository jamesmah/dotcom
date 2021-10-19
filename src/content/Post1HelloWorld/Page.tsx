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
      <div>
        Welcome to the first post on my website blog. Hope to see you again in
        the future.
      </div>

      <ImageAuthor
        authorLink={`https://www.pexels.com/@pixabay`}
        authorName={`Pixabay`}
        image={data.image}
        imageLink={`https://www.pexels.com/photo/sky-earth-space-working-2156/`}
      />
    </Stack>
  )
}

export default Page
