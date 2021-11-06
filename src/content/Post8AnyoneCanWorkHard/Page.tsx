import ImageAuthor from "../../components/elements/ImageAuthor"
import Stack from "../../components/elements/Stack"
import data from "."

const Page = () => (
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
    <ImageAuthor image={data.image} imageDetails={data.imageDetails} />
  </Stack>
)

export default Page
