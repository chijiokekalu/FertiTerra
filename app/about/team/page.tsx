"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Linkedin, Mail, Upload, CheckCircle } from "lucide-react"

const teamMembers = [
  {
    name: "Kalu Chijioke Ugorji",
    role: "Founder & CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2061.JPG-Z9NdfWAH3IoMzxTGWwdcMTdDmfFl0t.jpeg",
    bio: "Kalu is a visionary leader passionate about transforming fertility care across Africa through technology and innovation.",
    linkedin: "https://linkedin.com/in/kaluugorji",
    email: "kalu@fertiterra.com",
  },
  {
    name: "Dr. Simpa Dania",
    role: "Medical Advisor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2057.JPG-KX9RUdE0a0xFlUAKAyIyQEcoVVgrLD.jpeg",
    bio: "Dr. Dania brings extensive experience in reproductive health and fertility treatment, guiding our medical protocols.",
    linkedin: "https://linkedin.com/in/simpadania",
    email: "simpa@fertiterra.com",
  },
]

export default function TeamPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showExperienceDetails, setShowExperienceDetails] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Meet Our Team</h1>
          <p className="mt-2 text-lg text-gray-600">The passionate people behind FertiTerra's mission</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cofounder Application Form */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Join FertiTerra as a Cofounder – Medical Team
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              FertiTerra is transforming fertility care across Africa through technology, innovation, and compassion. We
              are looking for a passionate female cofounder with a medical background to join our leadership team. If
              you are driven to make fertility care more accessible and equitable, we would love to hear from you.
            </p>

            {formSubmitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ✅ Your application has been submitted successfully
                </h3>
                <p className="text-gray-600">Thank you for applying to join FertiTerra!</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xldodngw"
                method="POST"
                encType="multipart/form-data"
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6"
                onSubmit={() => setFormSubmitted(true)}
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country of Residence <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    placeholder="e.g., Nigeria, Kenya, South Africa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Professional Title and Years of Experience */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="professionalTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                      Professional Title / Background <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="professionalTitle"
                      name="professionalTitle"
                      required
                      placeholder="e.g., Gynecologist, Fertility Specialist"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="yearsExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience in Healthcare <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="yearsExperience"
                      name="yearsExperience"
                      required
                      min="0"
                      placeholder="e.g., 5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                {/* Current Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Organization / Affiliation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    placeholder="Name of hospital, clinic, or institution"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Why interested */}
                <div>
                  <label htmlFor="whyInterested" className="block text-sm font-semibold text-gray-700 mb-2">
                    Why are you interested in joining FertiTerra as a cofounder? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="whyInterested"
                    name="whyInterested"
                    required
                    rows={4}
                    placeholder="Share your motivation and vision for joining FertiTerra..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                {/* Unique skills */}
                <div>
                  <label htmlFor="uniqueSkills" className="block text-sm font-semibold text-gray-700 mb-2">
                    What unique skills or expertise will you bring to the FertiTerra medical team?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="uniqueSkills"
                    name="uniqueSkills"
                    required
                    rows={4}
                    placeholder="Describe your unique skills, expertise, and what makes you a great fit..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                {/* Fertility experience */}
                <div>
                  <label htmlFor="fertilityExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Have you previously worked in fertility or reproductive health?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="fertilityExperience"
                    name="fertilityExperience"
                    required
                    onChange={(e) => setShowExperienceDetails(e.target.value === "yes")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Optional details for fertility experience */}
                {showExperienceDetails && (
                  <div>
                    <label htmlFor="fertilityDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                      Please provide details about your fertility/reproductive health experience
                    </label>
                    <textarea
                      id="fertilityDetails"
                      name="fertilityDetails"
                      rows={3}
                      placeholder="Describe your specific experience in fertility or reproductive health..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none"
                    />
                  </div>
                )}

                {/* LinkedIn Profile */}
                <div>
                  <label htmlFor="linkedinProfile" className="block text-sm font-semibold text-gray-700 mb-2">
                    LinkedIn Profile or Portfolio URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="linkedinProfile"
                    name="linkedinProfile"
                    required
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload CV <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="cv"
                      className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-rose-500 transition"
                    >
                      <Upload className="w-5 h-5 mr-2 text-gray-400" />
                      <span className="text-gray-600">{fileName || "Click to upload CV (PDF or DOCX only)"}</span>
                    </label>
                  </div>
                </div>

                {/* Commitment Timeline */}
                <div>
                  <label htmlFor="commitmentTimeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    How soon can you commit to joining the team? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="commitmentTimeline"
                    name="commitmentTimeline"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a timeline</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-3-months">1–3 months</option>
                    <option value="3-6-months">3–6 months</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                </div>

                {/* Footer Text */}
                <p className="text-center text-sm text-gray-600 pt-4">
                  Thank you for your interest in joining FertiTerra. We review every application carefully and will
                  reach out to shortlisted candidates via email.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in fertility care across
            Africa.
          </p>
          <Link href="/careers">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              View Open Positions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
