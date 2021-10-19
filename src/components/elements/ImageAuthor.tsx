import Image from "./Image"

const ImageAuthor = ({
  image,
  authorName,
  authorLink,
  imageLink,
}: {
  image: string
  authorName: string
  authorLink: string
  imageLink: string
}) => {
  return (
    <div>
      <Image src={image} />
      <div data-aos={`fade-left`} data-aos-offset={0}>
        Photo by
        {` `}
        <strong>
          <a href={authorLink} rel={`noreferrer`} target={`_blank`}>
            {authorName}
          </a>
        </strong>
        {` `}
        from
        {` `}
        <strong>
          <a href={imageLink} rel={`noreferrer`} target={`_blank`}>
            Pexels
          </a>
        </strong>
      </div>
    </div>
  )
}

export default ImageAuthor
