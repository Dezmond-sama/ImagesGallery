import fs from "fs";
const testFolder = "public/images/";
import { ExifData, ExifParserFactory } from "ts-exif-parser";

export type PhotoData = {
    src: string;
    exif?: ExifData | undefined;
};
export const readFiles = async (): Promise<PhotoData[]> => {
    const files: string[] | undefined = fs.readdirSync(testFolder);
    return await Promise.all(
        (files ?? []).map((f): PhotoData => {
            const imgbuffer = fs.readFileSync(testFolder + f);
            const parser = ExifParserFactory.create(imgbuffer);
            return { src: `/images/${f}`, exif: parser.parse() };
        })
    );
};
