import ImageAuthor from "../../components/elements/ImageAuthor"
import Stack from "../../components/elements/Stack"
import data from "."

const Page = () => {
  return (
    <Stack gap={`1rem`}>
      <blockquote data-aos={`fade-right`}>
        <q>{data.quote}</q>
      </blockquote>

      <ImageAuthor
        image={data.image}
        authorName={`Daria Shevtsova`}
        authorLink={`https://www.pexels.com/@daria`}
        imageLink={`https://www.pexels.com/photo/macbook-air-beside-notebook-and-camera-916335/`}
      />
    </Stack>
  )
}

export default Page
