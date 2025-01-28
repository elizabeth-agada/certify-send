const HowItWorks = () => {
    const steps = [
      {
        title: "Sign Up",
        description: "Create your account and log in to our platform."
      },
      {
        title: "Design Your Certificate",
        description: "Choose a template or upload your design."
      },
      {
        title: "Input Recipients",
        description: "Upload a list of recipients or enter them manually."
      },
      {
        title: "Set Up Webinars",
        description: "Create registration forms for your virtual sessions."
      }
    ]
  
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto px-28 flex justify-between">
          <div className="max-w-3xl">
            <h3 className="text-[#5570F1] font-semibold text-sm uppercase tracking-wide">
              How it works
            </h3>
            <h2 className="text-4xl font-semibold text-gray-900 mt-3 leading-snug">
              A Simple, Streamlined Process to Generate and Deliver Certificates
            </h2>
            <p className="text-gray-600 mt-4">
              From signing up to sending certificates, our platform guides you step-by-step to ensure effortless and efficient certification management.
            </p>
            <a 
              href="/get-started" 
              className="inline-flex items-center text-[#5570F1] font-semibold mt-6 hover:underline"
            >
              Get Started
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
  
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-gray-200 bg-white"
              >
                <div className="mb-4">
                  <img src="/img/lock.png" alt="" className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default HowItWorks