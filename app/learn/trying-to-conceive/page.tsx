import Button from "@/components/ui/button"

const TryingToConceivePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Trying to Conceive</h1>
      <p className="text-lg mb-8">Learn about TTC and how to increase your chances of conception.</p>
      {/* Pricing Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Pricing</h2>
        <p className="text-lg mb-4">Start your TTC journey with our comprehensive guide.</p>
        <a
          href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button
            size="lg"
            className="w-full bg-[#635bff] hover:bg-[#5a52e8] text-white transition-colors duration-200"
          >
            Pay $200 - Start Your TTC Journey
          </Button>
        </a>
      </div>
      {/* Additional Content */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
        <p className="text-lg mb-4">Here are some additional resources to help you on your TTC journey.</p>
        {/* List of resources */}
      </div>
    </div>
  )
}

export default TryingToConceivePage
