import fs from "fs";
import imageSize from "image-size";
const testFolder = "public/images/";
import { ExifData, ExifParserFactory } from "ts-exif-parser";

export type PhotoData = {
    src: string;
    exif?: ExifData | undefined;
    ratio: number;
    date: number;
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
            const { width, height } = imageSize(imgbuffer);
            const parser = ExifParserFactory.create(imgbuffer);
            const date = fs.statSync(testFolder + f).ctime.getTime();
            return {
                src: `/images/${f}`,
                exif: parser.parse(),
                ratio: (height ?? 1) / (width ?? 1),
                date,
            };
        })
        .sort(
            (p1, p2) =>
                (p1.exif?.tags?.DateTimeOriginal ?? p1.date) -
                (p2.exif?.tags?.DateTimeOriginal ?? p2.date)
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
