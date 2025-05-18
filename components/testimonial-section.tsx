import Image from "next/image"

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">Success Stories</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hear From Our Community</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Real stories from women who found success with FertiTerra.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col rounded-xl bg-gray-50 p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Sarah M."
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Sarah M.</h3>
                <p className="text-sm text-gray-500">Age 34, New York</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="italic text-gray-600">
                "After trying for 2 years, FertiTerra helped me understand my hormone levels and create a plan that
                worked. I'm now 6 months pregnant with my first child!"
              </p>
            </div>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="gold"
                  stroke="gold"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-gray-50 p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Jennifer L."
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Jennifer L.</h3>
                <p className="text-sm text-gray-500">Age 37, California</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="italic text-gray-600">
                "The virtual consultations with fertility specialists were game-changing. I finally got answers about my
                PCOS and a treatment plan that worked for me."
              </p>
            </div>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="gold"
                  stroke="gold"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-gray-50 p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Michelle K."
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Michelle K.</h3>
                <p className="text-sm text-gray-500">Age 32, Texas</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="italic text-gray-600">
                "The community support at FertiTerra made all the difference. I no longer felt alone in my journey, and
                the personalized care led to our beautiful twins!"
              </p>
            </div>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="gold"
                  stroke="gold"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
