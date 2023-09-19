import Image from "next/image";

type Props = {
    src: string;
    alt: string;
};
const Icon = ({ src, alt }: Props) => {
    return (
        <Image
            className="image"
            src={src}
            alt={alt}
            width={24}
            height={24}
            sizes="24px"
        />
    );
};

export default Icon;
