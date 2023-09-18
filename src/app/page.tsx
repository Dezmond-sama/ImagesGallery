import ImageCard from "@/components/ImageCard";
import { PhotoData, getPagesCount, readFiles } from "@/lib/fetchImages";

const Home = async () => {
    const files: PhotoData[] = await readFiles(6, 0);

    return (
        <div>
            {files.map((f: PhotoData) => (
                <ImageCard key={f.src} photo={f} width={500} />
            ))}
        </div>
    );
};

export default Home;
