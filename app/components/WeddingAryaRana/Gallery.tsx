"use client";

import { forwardRef } from "react";
import Image from "next/image";
import GalleryCarouselEmbla, { GalleryImage } from "../Gallery/GalleryCarouselembla";

type GalleryProps = {
  data: any;
};

const Gallery = forwardRef<HTMLElement, GalleryProps>(({ data }, ref) => {
  const images: GalleryImage[] = [
    { src: "/images/arya-dan-rana/mobile/img-gallery-1.png", type: "landscape" },
    { src: "/images/arya-dan-rana/mobile/img-gallery-1.png", type: "landscape" },
    { src: "/images/arya-dan-rana/mobile/img-gallery-1.png", type: "landscape" },
  ];

  return (
    // lg:min-h-[949px]
    <div className="h-full z-2 relative" id="gallery">
      {/* <Image src="/images/gallery_3.png"
        alt="Gallery Background" width={401} height={603}
        priority
        className="object-cover w-full h-full z-2 lg:h-[949px] lg:hidden" />

      <Image src="/images/gallery_desktop_full.png"
        alt="Gallery Background" width={1564} height={949}
        priority
        className="object-cover w-full h-full z-2 lg:h-[949px] lg:block hidden" /> */}

      <GalleryCarouselEmbla images={images} />
    </div>
  );
});

Gallery.displayName = "Gallery";

export default Gallery;