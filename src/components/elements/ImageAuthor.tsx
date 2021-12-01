import { ImageDetails } from "../../types"
import ExternalLink from "../molecules/ExternalLink"
import Image from "./Image"

const ImageAuthor = ({
  image,
  imageDetails,
}: {
  image: string
  imageDetails: ImageDetails
}) => (
  <div>
    <Image src={image} />
    <div data-aos={`fade-left`} data-aos-offset={0}>
      Photo by
      {` `}
      <strong>
        <ExternalLink href={imageDetails.author.link} icon={``}>
          {imageDetails.author.name}
        </ExternalLink>
      </strong>
      {` `}
      from
      {` `}
      <strong>
        <ExternalLink href={imageDetails.link} icon={``}>
          Pexels
        </ExternalLink>
      </strong>
    </div>
  </div>
)

export default ImageAuthor
