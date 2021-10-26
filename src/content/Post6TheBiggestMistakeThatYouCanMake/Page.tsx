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
        authorLink={`https://www.pexels.com/@eberhardgross`}
        authorName={`Eberhard Grossgasteiger`}
        image={data.image}
        imageLink={`https://www.pexels.com/photo/man-standing-on-top-of-rock-at-daytime-673018/`}
      />
    </Stack>
  )
}

export default Page
