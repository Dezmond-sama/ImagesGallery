import fs from "fs";
const testFolder = "public/images/";
import { ExifData, ExifParserFactory } from "ts-exif-parser";

export type PhotoData = {
    src: string;
    exif?: ExifData | undefined;
};
export const readFiles = async (
    imagesPerPage?: number,
    page?: number
): Promise<PhotoData[]> => {
    const files: string[] = fs.readdirSync(testFolder);
    const currImagesPerPage = (imagesPerPage ?? files.length) || 10;
    const currPage = Math.max(1, page ?? 1);

    return await Promise.all(
        files
            .slice(
                currImagesPerPage * (currPage - 1),
                currImagesPerPage * currPage
            )
            .map((f): PhotoData => {
                const imgbuffer = fs.readFileSync(testFolder + f);
                const parser = ExifParserFactory.create(imgbuffer);
                return { src: `/images/${f}`, exif: parser.parse() };
            })
    );
};
export const getFilesCount = (): number => {
    return fs.readdirSync(testFolder).length;
};
export const getPagesCount = (imagesPerPage: number): number => {
    const filesCount = getFilesCount();
    return imagesPerPage ? Math.ceil(filesCount / imagesPerPage) : 1;
};
