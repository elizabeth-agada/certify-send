

const Hero = () => {
  return (
    <section className="bg-[#F9FAFB] relative flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-4xl text-gray-800 leading-tight">
          Automate, Generate, and Deliver <br />
          <span className="">Digital Certificates with Ease!</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Empower your organization with our cutting-edge platform that
          automates digital certificate generation and delivery—effortlessly
          sending thousands of certificates in just a few clicks!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
            href="#get-started"
            className="px-4 py-2 bg-[#5570F1] text-white font-medium rounded-lg shadow hover:bg-blue-700 flex items-center space-x-1"
          >
            <span>Sign up - it’s free!</span>
            <img src="/img/button-icon1.png" alt="" className="w-5 h-5" />
          </a>
         
          <button className="border rounded-lg p-4">
            Learn about CertifySend
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
