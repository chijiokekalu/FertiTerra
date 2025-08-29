import Image from "next/image"

export function BrandLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4">
        <Image
          src="/images/fertiterra-logo.png"
          alt="FertiTerra Technologies Logo"
          width={200}
          height={80}
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
        FertiTerra Technologies
      </h1>
    </div>
  )
}
