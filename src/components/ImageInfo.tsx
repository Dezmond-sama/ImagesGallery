import { ExifData } from "ts-exif-parser";
import Icon from "./Icon";

type Props = {
    exif?: ExifData;
};
const ImageInfo = ({ exif }: Props) => {
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
    return (
        exif?.tags?.Model && (
            <div className="photo-card__info">
                <div className="photo-card-info__line">
                    <div className="photo-card-info-line__elem">
                        <Icon src="/icons/author.svg" alt="author" />
                        {exif.tags.Artist}
                    </div>
                </div>
                <div className="photo-card-info__line">
                    <div className="photo-card-info-line__elem">
                        <Icon src="/icons/camera.svg" alt="camera" />
                        {exif.tags.Model}
                    </div>
                    <div className="photo-card-info-line__elem">
                        <Icon src="/icons/lens.svg" alt="lens" />
                        {exif.tags.LensModel}
                    </div>
                </div>
                <div className="photo-card-info__line">
                    <div className="photo-card-info-line__elem">
                        <Icon src="/icons/aperture.svg" alt="aperture" />
                        f/{exif.tags.FNumber}
                    </div>
                    <div className="photo-card-info-line__elem">
                        <Icon src="/icons/speed.svg" alt="ss" />
                        {exif.tags.ExposureTime}
                    </div>
                    <div className="photo-card-info-line__elem">
                        <Icon src="/icons/iso.svg" alt="iso" />
                        {exif.tags.ISO}
                    </div>
                    <div className="photo-card-info-line__elem">
                        <Icon src="/icons/focallength.svg" alt="flen" />
                        {exif.tags.FocalLength}
                    </div>
                </div>
            </div>
        )
    );
};

export default ImageInfo;
