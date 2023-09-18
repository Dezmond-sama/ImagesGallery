import { PhotoData } from "@/lib/fetchImages";
import Image from "next/image";

type Props = {
    photo: PhotoData;
    width: number;
};
const ImageCard = ({ photo, width }: Props) => {
    // ExifData {
    //   startMarker: { openWithOffset: [Function: openWithOffset], offset: 0 },
    //   tags: {
    //     Make: 'NIKON CORPORATION',
    //     Model: 'NIKON D610',
    //     XResolution: 240,
    //     YResolution: 240,
    //     ResolutionUnit: 2,
    //     Software: 'Adobe Photoshop Lightroom Classic 7.1 (Windows)',
    //     ModifyDate: 1517162681,
    //     Artist: 'Yuganov Evgeny',
    //     Copyright: 'Yuganov Evgeny',
    //     ExposureTime: 4,
    //     FNumber: 5.6,
    //     ExposureProgram: 1,
    //     ISO: 100,
    //     SensitivityType: 2,
    //     DateTimeOriginal: 1487863385,
    //     CreateDate: 1487863385,
    //     ShutterSpeedValue: -2,
    //     ApertureValue: 4.970854,
    //     ExposureCompensation: -0.3333333333333333,
    //     MaxApertureValue: 4.3,
    //     MeteringMode: 5,
    //     LightSource: 0,
    //     Flash: 16,
    //     FocalLength: 28,
    //     SubSecTimeOriginal: '80',
    //     SubSecTimeDigitized: '80',
    //     ColorSpace: 1,
    //     FocalPlaneXResolution: 1675.0149841308594,
    //     FocalPlaneYResolution: 1675.0149841308594,
    //     FocalPlaneResolutionUnit: 3,
    //     SensingMethod: 2,
    //     CustomRendered: 0,
    //     ExposureMode: 1,
    //     WhiteBalance: 0,
    //     DigitalZoomRatio: 1,
    //     FocalLengthIn35mmFormat: 28,
    //     SceneCaptureType: 0,
    //     GainControl: 0,
    //     Contrast: 0,
    //     Saturation: 0,
    //     Sharpness: 0,
    //     SubjectDistanceRange: 0,
    //     SerialNumber: '6027659',
    //     LensInfo: [Array],
    //     LensModel: '18.0-35.0 mm f/3.5-4.5'
    //   },
    //   imageSize: { height: 1331, width: 2000 },
    //   thumbnailOffset: 1052,
    //   thumbnailLength: 17086,
    //   thumbnailType: 6,
    //   app1Offset: 6
    // }
    const ratio =
        (photo.exif?.imageSize?.height ?? 1) /
        (photo.exif?.imageSize?.width ?? 1);
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
            </div>
        </div>
    );
};

export default ImageCard;
