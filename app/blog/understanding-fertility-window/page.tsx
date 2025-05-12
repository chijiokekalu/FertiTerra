import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CartButton } from "@/components/cart-button"

export default function ArticlePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/plans" className="text-sm font-medium">
              Plans
            </Link>
            <Link href="/test-kits" className="text-sm font-medium">
              Test Kits
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/community" className="text-sm font-medium">
              Community
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <CartButton />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <article className="container max-w-4xl py-8 md:py-12">
          <div className="mb-8">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          <div className="mb-8">
            <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200 mb-4">Fertility Basics</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Understanding Your Fertility Window: Maximizing Your Chances
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>May 10, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Dr. Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">OB/GYN, Fertility Specialist</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8 bg-gradient-to-br from-rose-100 to-purple-100">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Fertility Window Illustration"
              width={1200}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose prose-rose max-w-none">
            <p className="lead">
              Understanding your fertility window is crucial when trying to conceive. This window represents the days
              during your menstrual cycle when pregnancy is possible. By identifying this window accurately, you can
              significantly increase your chances of conception.
            </p>

            <h2>What is the Fertility Window?</h2>
            <p>
              The fertility window typically spans about 6 days: the 5 days before ovulation and the day of ovulation
              itself. This is because sperm can survive in the female reproductive tract for up to 5 days, while an egg
              remains viable for about 24 hours after ovulation.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-lg p-6 my-8">
              <h3 className="text-purple-700 font-bold text-lg mb-2">Key Facts About Your Fertility Window</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>
                    <strong>Timing:</strong> Typically occurs mid-cycle, but can vary significantly between women
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>
                    <strong>Duration:</strong> Approximately 6 days (5 days before ovulation + day of ovulation)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>
                    <strong>Peak Fertility:</strong> The two days before ovulation offer the highest chances of
                    conception
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>
                    <strong>Variability:</strong> Can shift due to stress, illness, travel, or lifestyle changes
                  </span>
                </li>
              </ul>
            </div>

            <h2>How to Track Your Fertility Window</h2>
            <p>
              There are several methods to help you identify your fertility window. Using a combination of these methods
              can provide the most accurate prediction:
            </p>

            <h3>1. Calendar Method</h3>
            <p>
              The simplest approach is to track the length of your menstrual cycles over several months. If you have
              regular cycles, ovulation typically occurs 14 days before the start of your next period. For example, in a
              28-day cycle, ovulation would occur around day 14.
            </p>
            <p>
              However, this method is less reliable for women with irregular cycles and doesn't account for cycle
              variations.
            </p>

            <h3>2. Basal Body Temperature (BBT) Tracking</h3>
            <p>
              Your basal body temperature rises slightly (about 0.2°F) after ovulation due to increased progesterone
              production. By taking your temperature each morning before getting out of bed, you can identify this
              pattern.
            </p>
            <p>
              While BBT can confirm that ovulation has occurred, it's most useful when combined with other methods since
              it indicates ovulation after it has happened.
            </p>

            <h3>3. Cervical Mucus Monitoring</h3>
            <p>
              The consistency and appearance of cervical mucus changes throughout your cycle. As you approach ovulation,
              cervical mucus becomes clear, slippery, and stretchy (similar to egg whites), which helps sperm travel to
              the egg.
            </p>
            <p>This "fertile-quality" mucus is a good indicator that you're entering your fertility window.</p>

            <h3>4. Ovulation Predictor Kits (OPKs)</h3>
            <p>
              These at-home tests detect the surge in luteinizing hormone (LH) that occurs 24-36 hours before ovulation.
              When the test indicates an LH surge, you're likely to ovulate within the next day or two.
            </p>
            <p>OPKs are generally reliable but can be affected by certain medical conditions like PCOS.</p>

            <h3>5. Fertility Monitoring Devices</h3>
            <p>
              Modern technology offers various devices that track multiple fertility indicators simultaneously. These
              can include wearable sensors that monitor temperature patterns, apps that analyze your cycle data, and
              more comprehensive monitors that track multiple parameters.
            </p>

            <div className="bg-rose-50 border border-rose-100 rounded-lg p-6 my-8">
              <h3 className="text-rose-700 font-bold text-lg mb-2">Optimizing Your Chances</h3>
              <p className="mb-4">
                To maximize your chances of conception, consider these evidence-based recommendations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>
                    Have intercourse every 1-2 days during your fertility window, with emphasis on the 2-3 days before
                    expected ovulation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>
                    Avoid using lubricants that may be harmful to sperm; if needed, use fertility-friendly options
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>
                    Maintain a healthy lifestyle with proper nutrition, regular exercise, and stress management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Consider using multiple tracking methods simultaneously for greater accuracy</span>
                </li>
              </ul>
            </div>

            <h2>When to Seek Professional Help</h2>
            <p>
              If you've been tracking your fertility window and trying to conceive without success, it may be time to
              consult a healthcare provider:
            </p>
            <ul>
              <li>If you're under 35 and have been trying for 12 months without success</li>
              <li>If you're 35 or older and have been trying for 6 months without success</li>
              <li>If you have irregular cycles or known fertility issues</li>
              <li>If you have a history of reproductive health problems</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Understanding and accurately tracking your fertility window is a powerful tool when trying to conceive.
              While no method is 100% accurate, combining different tracking approaches can significantly improve your
              ability to identify your most fertile days.
            </p>
            <p>
              Remember that every woman's body is unique, and what works for one person may not work for another. Be
              patient with yourself as you learn to recognize your body's fertility signals, and don't hesitate to seek
              professional guidance when needed.
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 pt-8 border-t">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-5 w-5 text-rose-500" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="h-5 w-5 text-purple-500" />
                <span className="sr-only">Bookmark</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5 text-teal-500" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Was this article helpful?</span>
              <Button variant="outline" size="sm" className="gap-1">
                <MessageCircle className="h-4 w-4" /> Feedback
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Understanding Ovulation Signs and Symptoms",
                  category: "Fertility Basics",
                  color: "rose",
                  time: "8 min read",
                  slug: "ovulation-signs-symptoms",
                },
                {
                  title: "The Role of Nutrition in Fertility",
                  category: "Nutrition",
                  color: "purple",
                  time: "7 min read",
                  slug: "nutrition-fertility-role",
                },
                {
                  title: "Stress and Fertility: What's the Connection?",
                  category: "Mental Health",
                  color: "teal",
                  time: "9 min read",
                  slug: "stress-fertility-connection",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md"
                  style={{
                    borderColor:
                      article.color === "rose"
                        ? "rgb(254 205 211)"
                        : article.color === "purple"
                          ? "rgb(233 213 255)"
                          : "rgb(204 251 241)",
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        className={`bg-${article.color}-100 text-${article.color}-700 hover:bg-${article.color}-200`}
                        style={{
                          backgroundColor:
                            article.color === "rose"
                              ? "rgb(254 205 211)"
                              : article.color === "purple"
                                ? "rgb(233 213 255)"
                                : "rgb(204 251 241)",
                          color:
                            article.color === "rose"
                              ? "rgb(190 18 60)"
                              : article.color === "purple"
                                ? "rgb(126 34 206)"
                                : "rgb(15 118 110)",
                        }}
                      >
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{article.time}</span>
                    </div>
                    <h3
                      className={`text-lg font-bold mb-2 group-hover:text-${article.color}-600 transition-colors`}
                      style={{
                        color: "inherit",
                      }}
                    >
                      {article.title}
                    </h3>
                    <Link href={`/blog/${article.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-1 text-${article.color}-600 hover:text-${article.color}-700 p-0`}
                        style={{
                          color:
                            article.color === "rose"
                              ? "rgb(225 29 72)"
                              : article.color === "purple"
                                ? "rgb(147 51 234)"
                                : "rgb(13 148 136)",
                        }}
                      >
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/fertiterra-logo.png"
                alt="FertiTerra Logo"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">Empowering women through fertility awareness and support.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="/about" className="text-sm">
              About Us
            </Link>
            <Link href="/privacy" className="text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-rose-500 hover:text-rose-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-teal-500 hover:text-teal-600 transition-colors">
              <span className="sr-only">WhatsApp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.462.13-.61.136-.137.301-.354.451-.531.151-.177.2-.301.3-.502.099-.2.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.007-.371-.01-.571-.01-.2 0-.523.074-.797.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.571-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
