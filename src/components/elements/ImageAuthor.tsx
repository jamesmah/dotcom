import { ImageDetails } from "../../types"
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
        <a href={imageDetails.author.link} rel={`noreferrer`} target={`_blank`}>
          {imageDetails.author.name}
        </a>
      </strong>
      {` `}
      from
      {` `}
      <strong>
        <a href={imageDetails.link} rel={`noreferrer`} target={`_blank`}>
          Pexels
        </a>
      </strong>
    </div>
  </div>
)

export default ImageAuthor
