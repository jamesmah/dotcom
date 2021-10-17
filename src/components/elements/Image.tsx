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
          once
          offset={500}
          css={`
            width: 100%;
            padding-top: calc(100% / (${placeholderAspectRatio}));
            position: relative;
          `}
        >
          <img
            src={src}
            css={`
              display: none;
            `}
            onLoad={() => setImageLoaded(true)}
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
          data-aos={`fade`}
          data-aos-offset={0}
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
