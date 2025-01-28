import React from "react";

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-[#5570F1] font-semibold text-sm uppercase tracking-wide">
          Why Choose Certifysend?
        </h3>
        <h2 className="text-4xl font-semibold text-gray-900 mt-3 leading-snug">
          Scalable, Affordable, and <br /> Supported Every Step of the Way
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Certifysend adapts to your needs, minimizes costs, and offers expert assistance 
          to ensure a seamless experience for all your certification and webinar management tasks.
        </p>
      </div>

      <div className="mt-16 mx-auto grid grid-cols-1 md:grid-cols-5 px-32 gap-12 items-center">
        <div className="flex flex-col items-center text-center">
          <img src="/img/arrow-shrink.png" alt="Scalability" className="w-12 h-12 mb-4" />
          <h3 className="font-semibold text-gray-900 text-lg">Scalability</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Whether you need to send 10 or 10,000 certificates, our platform scales with your needs.
          </p>
        </div>
        <div className="hidden md:flex justify-center">
          <img src="/img/Direction Line.png" alt="Divider" className="w-24" />
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/wallet-fund.png" alt="Cost-Effective" className="w-12 h-12 mb-4" />
          <h3 className="font-semibold text-gray-900 text-lg">Cost-Effective</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Save on printing and postage costs while streamlining your certification and webinar processes.
          </p>
        </div>

        <div className="hidden md:flex justify-center">
          <img src="/img/Direction Line.png" alt="Divider" className="w-24" />
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/support.png" alt="Customer Support" className="w-12 h-12 mb-4" />
          <h3 className="font-semibold text-gray-900 text-lg">Customer Support</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Our dedicated support team is here to help you with any questions or technical issues you might encounter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
