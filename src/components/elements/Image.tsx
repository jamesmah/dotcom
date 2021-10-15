import AOS from "aos"
import { useEffect, useState } from "react"
import LazyLoad from "react-lazyload"

const Image = ({
  src,
  placeholderAspectRatio = `3 / 2`,
  ...props
}: {
  src: string
  placeholderAspectRatio?: string
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    AOS.refresh()
  }, [imageLoaded])

  return (
    <>
      {!imageLoaded && (
        <LazyLoad
          once
          offset={500}
          css={`
            padding-top: calc(100% / (${placeholderAspectRatio}));
          `}
        >
          <img
            src={src}
            css={`
              display: none;
            `}
            onLoad={() => setImageLoaded(true)}
          />
        </LazyLoad>
      )}
      {imageLoaded && (
        <img
          {...props}
          src={src}
          css={`
            width: 100%;
          `}
        />
      )}
    </>
  )
}

export default Image
