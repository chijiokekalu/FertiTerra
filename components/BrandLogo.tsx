import Image from "next/image"

export default function BrandLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-2">
        <Image
          src="/fertiterra-logo.png"
          alt="FertiTerra Technologies Logo"
          width={200}
          height={80}
          className="object-contain"
        />
      </div>
      <h1 className="text-black font-bold text-xl font-serif tracking-wide">FertiTerra Technologies</h1>
    </div>
  )
}
