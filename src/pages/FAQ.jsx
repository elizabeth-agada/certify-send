import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I customize certificates with my branding?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? It is some sort of hack? Are you copying and pasting an actual font?"
    },
    {
      question: "Can I integrate this with my existing systems?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even po"
    },
    {
      question: "How does the free trial work?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text?"
    },
    {
      question: "Is my data secure?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even po"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
        <h3 className="text-[#5570F1] font-semibold text-sm uppercase tracking-wide">
            FAQ
          </h3>
          <h2 className="text-4xl font-semibold text-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 mt-4">
            Need help with something? Here are our most frequently asked questions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 border-l-4 border-[#5570F1]">
              <h3 className="font-semibold text-gray-900 text-lg">
                {faq.question}
              </h3>
              <p className="text-gray-600 mt-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            If you couldn't find your favorite questions kindly send us a mail at
          </p>
          <a
            href="mailto:hello@certifysend.co"
            className="text-[#5570F1] font-medium mt-2 inline-block hover:underline"
          >
            hello@certifysend.co
          </a>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mt-4">
            Never miss a beat. Get a weekly dose of to use our product, secrets, tips, trends, and banter in your inbox.
          </p>
          
          <div className="mt-8 max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1] focus:border-transparent"
            />
            <button className="px-8 py-3 bg-[#5570F1] text-white rounded-lg hover:bg-[#4560E1] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;