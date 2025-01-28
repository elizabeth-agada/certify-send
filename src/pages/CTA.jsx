const CTASection = () => {
    return (
      <section className="bg-[#5570F1] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Ready to Simplify Your Certification and Webinar Process?
          </h2>
          <p className="mt-6 text-lg opacity-90">
            Start using Certifysend today and experience effortless automation with a free trial. Click below to begin your journey!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#5570F1] rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Sign up - it's free!
              <img src="/img/button-icon.png" alt="" className="w-5 h-5 text-[#5570F1]" />
            </a>
            <a
              href="/learn-more"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#5570F1] transition-colors"
            >
              Learn about Certifysend
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;