import fs from "fs";
const testFolder = "public/images/";
import { ExifData, ExifParserFactory } from "ts-exif-parser";

export type PhotoData = {
    src: string;
    exif?: ExifData | undefined;
};
export const readFiles = async (
    imagesPerPage: number,
    page: number
): Promise<PhotoData[]> => {
    const files: string[] = fs.readdirSync(testFolder);
    const currImagesPerPage = imagesPerPage || files.length;
    const currPage = Math.max(1, page);

    return files
        .map((f): PhotoData => {
            const imgbuffer = fs.readFileSync(testFolder + f);
            const parser = ExifParserFactory.create(imgbuffer);
            return { src: `/images/${f}`, exif: parser.parse() };
        })
        .sort(
            (p1, p2) =>
                (p1.exif?.tags?.DateTimeOriginal ?? 0) -
                (p2.exif?.tags?.DateTimeOriginal ?? 0)
        )
        .slice(
            currImagesPerPage * (currPage - 1),
            currImagesPerPage * currPage
        );
};
export const getFilesCount = (): number => {
    return fs.readdirSync(testFolder).length;
};
export const getPagesCount = (imagesPerPage: number): number => {
    const filesCount = getFilesCount();
    return imagesPerPage ? Math.ceil(filesCount / imagesPerPage) : 1;
};
