import Image from "next/image"

export function BrandLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/fertiterra-logo.png"
        alt="FertiTerra Technologies Logo"
        width={200}
        height={60}
        className="mb-3"
        priority
      />
      <h1 className="text-2xl font-bold text-black font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
        FertiTerra Technologies
      </h1>
    </div>
  )
}
