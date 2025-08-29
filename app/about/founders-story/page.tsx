import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Lightbulb, ArrowRight, Quote } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FoundersStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Putting fertility back into the hands of <span className="text-rose-500">families</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our mission is to democratize access to fertility care across Africa, ensuring every family has the tools,
              knowledge, and support they need on their journey to parenthood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                <Link href="/plans/basic-fertility-checkup">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/consultation">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] opacity-20 [background-size:24px_24px]"></div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src="/images/founder-story.png"
                alt="Founder's personal journey and inspiration"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-rose-100 rounded-full p-4">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why We Started FertiTerra</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My story begins with two remarkable women who shaped my understanding of motherhood and fertility. I
                  was raised by my foster mother, a woman who couldn't have biological children but poured all her love
                  into caring for me and other foster children.
                </p>
                <p>
                  My biological mother was a midwife who dedicated her life to helping other women bring life into the
                  world. Through her work, I witnessed firsthand the joy of successful pregnancies and the heartbreak of
                  fertility struggles.
                </p>
                <p>
                  These two perspectives—the longing for parenthood and the clinical reality of reproductive health—
                  showed me that fertility isn't just a medical issue. It's deeply personal, emotional, and often
                  isolating, especially in communities where these conversations happen in whispers.
                </p>
                <p className="font-medium text-gray-900">
                  FertiTerra was born from the belief that every family deserves access to comprehensive, compassionate
                  fertility care, regardless of their location or circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse team of healthcare professionals, technologists, and advocates united by our mission to
              transform fertility care across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Founder & CEO */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-rose-600">CK</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chijioke Ugorji Kalu</h3>
                <p className="text-rose-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Healthcare technology entrepreneur with a passion for democratizing access to fertility care. Combines
                  personal experience with business acumen to drive FertiTerra's mission across Africa.
                </p>
              </CardContent>
            </Card>

            {/* Chief Medical Officer */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">SO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Okafor</h3>
                <p className="text-green-600 font-medium mb-3">Chief Medical Officer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Board-certified reproductive endocrinologist with 15+ years of experience. Leads our clinical
                  protocols and ensures the highest standards of medical care in all our services.
                </p>
              </CardContent>
            </Card>

            {/* Chief Technology Officer */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">MA</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Adebayo</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Former software architect at leading healthtech companies. Oversees our platform development and
                  ensures secure, scalable technology solutions for our growing community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach combines cutting-edge science with compassionate care, making fertility health accessible and
              understandable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Science-Backed Approach</h3>
              <p className="text-gray-600">
                Every recommendation is based on the latest research in reproductive medicine and validated by our team
                of fertility specialists.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Care Model</h3>
              <p className="text-gray-600">
                We leverage technology to bring world-class fertility care to your doorstep, eliminating geographical
                and financial barriers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Support</h3>
              <p className="text-gray-600">
                Beyond medical care, we provide emotional support, community connection, and educational resources for
                your entire journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Compassion</h3>
                <p className="text-gray-600 text-sm">
                  We understand the emotional journey of fertility and approach every interaction with empathy and care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We maintain the highest standards in medical care, technology, and customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600 text-sm">
                  Quality fertility care should be available to everyone, regardless of location or economic status.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We continuously seek new ways to improve fertility care through technology and research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact So Far</h2>
              <p className="text-lg text-gray-600">
                Since launching, we've been privileged to support thousands of families across Africa on their fertility
                journeys.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">10,000+</div>
                <div className="text-gray-600">Families Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-rose-50 to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                      "Every family that finds hope through FertiTerra validates our mission. We're not just providing
                      medical services—we're restoring dreams, building families, and strengthening communities across
                      Africa."
                    </p>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">Chijioke Ugorji Kalu</div>
                      <div className="text-sm text-gray-600">Founder & CEO, FertiTerra</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of families who've found hope, answers, and support through FertiTerra's comprehensive
              fertility care platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                <Link href="/plans/basic-fertility-checkup">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
              >
                <Link href="/consultation">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
