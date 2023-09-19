import { PhotoData } from "@/lib/fetchImages";
import Image from "next/image";
import ImageInfo from "./ImageInfo";

type Props = {
    photo: PhotoData;
    width: number;
};
const ImageCard = ({ photo, width }: Props) => {
    const ratio = photo.ratio;
    const height = Math.ceil(width * ratio);
    const spans = Math.floor(height / 10);

    return (
        <div className="photo-card" style={{ gridRow: `span ${spans}` }}>
            <div className="photo-card__image-container">
                <Image
                    key={photo.src}
                    src={photo.src}
                    alt={"Photo"}
                    sizes={`${width}px`}
                    width={width}
                    height={height}
                />
                <ImageInfo exif={photo.exif} />
            </div>
        </div>
    );
};

export default ImageCard;
