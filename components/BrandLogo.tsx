import Image from "next/image"

interface BrandLogoProps {
  className?: string
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="mb-3">
        <Image
          src="/images/fertiterra-logo.png"
          alt="FertiTerra Technologies Logo"
          width={200}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-black font-bold text-xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
        FertiTerra Technologies
      </h1>
    </div>
  )
}
