import ImageAuthor from "../../components/elements/ImageAuthor"
import Stack from "../../components/elements/Stack"
import data from "."

const Page = () => {
  return (
    <Stack gap={`3rem`}>
      <ImageAuthor
        image={data.image}
        authorName={`Pixabay`}
        authorLink={`https://www.pexels.com/@pixabay`}
        imageLink={`https://www.pexels.com/photo/sky-earth-space-working-2156/`}
      />

      <div data-aos={`fade-up`} data-aos-offset={0}>
        Welcome to the first post on my website blog. Hope to see you again in
        the future.
      </div>
    </Stack>
  )
}

export default Page
