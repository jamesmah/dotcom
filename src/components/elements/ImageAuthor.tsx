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
      <img
        src={image}
        alt="quote"
        data-aos="fade"
        css={`
          width: 100%;
        `}
      />
      <div data-aos="fade-left" data-aos-offset="0">
        Photo by{` `}
        <strong>
          <a href={authorLink} target="_blank" rel="noreferrer">
            {authorName}
          </a>
        </strong>
        {` `}
        from{` `}
        <strong>
          <a href={imageLink} target="_blank" rel="noreferrer">
            Pexels
          </a>
        </strong>
      </div>
    </div>
  )
}

export default ImageAuthor
