import { PhotoData, readFiles } from "@/lib/fetchImages";
import ImageCard from "./ImageCard";

const Gallery = async () => {
    const files: PhotoData[] = await readFiles(6, 0);

    return (
        <div className="photo-gallery">
            {files.map((f: PhotoData) => (
                <ImageCard key={f.src} photo={f} width={500} />
            ))}
        </div>
    );
};

export default Gallery;
