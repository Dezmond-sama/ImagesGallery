import fs from "fs";
const testFolder = "public/images/";
import { ExifData, ExifParserFactory } from "ts-exif-parser";

export type PhotoData = {
    src: string;
    exif?: ExifData | undefined;
};
export const readFiles = async (
    imagesPerPage?: number | undefined,
    page?: number | undefined
): Promise<PhotoData[]> => {
    const files: string[] = fs.readdirSync(testFolder);
    const currImagesPerPage = imagesPerPage ?? files.length;
    const currPage = page ?? 0;

    return await Promise.all(
        files
            .slice(
                currImagesPerPage * currPage,
                currImagesPerPage * (currPage + 1)
            )
            .map((f): PhotoData => {
                const imgbuffer = fs.readFileSync(testFolder + f);
                const parser = ExifParserFactory.create(imgbuffer);
                return { src: `/images/${f}`, exif: parser.parse() };
            })
    );
};
export const getPagesCount = (imagesPerPage: number): number => {
    const filesCount: number = fs.readdirSync(testFolder).length;
    return Math.ceil(filesCount / imagesPerPage);
};
