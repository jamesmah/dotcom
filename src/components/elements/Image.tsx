import AOS from "aos"
import { useEffect, useState } from "react"
import LazyLoad from "react-lazyload"
import Loader from "./Loader"

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
          css={`
            width: 100%;
            padding-top: calc(100% / (${placeholderAspectRatio}));
            position: relative;
          `}
          offset={500}
          once
        >
          <img
            css={`
              display: none;
            `}
            onLoad={() => setImageLoaded(true)}
            src={src}
          />
          <div
            css={`
              display: grid;
              place-items: center;
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
            `}
          >
            <Loader />
          </div>
        </LazyLoad>
      )}
      {imageLoaded && (
        <img
          {...props}
          css={`
            width: 100%;
          `}
          data-aos={`fade`}
          data-aos-offset={0}
          src={src}
        />
      )}
    </>
  )
}

export default Image
