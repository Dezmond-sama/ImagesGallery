import { PhotoData, readFiles } from "@/lib/fetchImages";
import ImageCard from "./ImageCard";

type Props = {
    imageWidth?: number;
    page?: number;
    limit?: number;
};
const Gallery = async ({ imageWidth, page, limit }: Props) => {
    const files: PhotoData[] = await readFiles(limit, page);

    return (
        <div className="photo-gallery">
            {files.length ? (
                files.map((f: PhotoData) => (
                    <ImageCard
                        key={f.src}
                        photo={f}
                        width={imageWidth ?? 500}
                    />
                ))
            ) : (
                <div>No images found!</div>
            )}
        </div>
    );
};

export default Gallery;
