import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

const Avatar = ({
  src,
  alt = "Foto do perfil",
  size = 112,
  className = "",
}: AvatarProps) => {
  return (
    <div
      className={`rounded-full border-4 border-white overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
