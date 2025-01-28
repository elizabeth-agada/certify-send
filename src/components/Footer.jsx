import React from "react";

const Footer = () => {
  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Free Trial", href: "/free-trial" },
        { name: "Case Studies", href: "/case-studies" },
      ],
    },
    community: {
      title: "Community",
      links: [
        { name: "Webinars", href: "/webinars" },
        { name: "Events", href: "/events" },
        { name: "Referral Program", href: "/referral" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Careers", href: "/careers" },
      ],
    },
    learn: {
      title: "Learn",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "eBooks/Resources", href: "/resources" },
        { name: "Onboarding Guide", href: "/onboarding" },
      ],
    },
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto py-12 md:px-8 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 bg-[#5570F1] rounded-lg p-8 text-white">
          <h2 className="text-3xl font-semibold mb-4">
            Stay Connected with Certifysend
          </h2>
          <p className="mb-6">
            Simplify certification, streamline webinars, and save time with our cutting-edge platform.
          </p>
          <div className="flex justify-between items-end">
            <a 
              href="/get-started"
              className="inline-flex items-center bg-white text-[#5570F1] px-4 py-2 space-x-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Get Started
              <img src="/img/button-icon.png" alt="" className="w-5 h-5 ml-2" />
            </a>
            <img src="/img/Vector.png" alt="" className="w-20 h-20" />
          </div>
        </div>

        <div className="md:w-2/3 flex flex-wrap justify-between">
          <div className="grid grid-cols-3 gap-12 mb-8 md:mb-0">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-gray-900 font-medium mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#5570F1] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Logo */}
          <div className="">
            <img src="/img/logo.png" alt="CertifySend Logo" className="w-auto h-8" />
          </div>
        </div>
      </div>

      {/*<div className="">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <a
              href="/privacy"
              className="text-gray-600 hover:text-[#5570F1] transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/terms"
              className="text-gray-600 hover:text-[#5570F1] transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/help"
              className="text-gray-600 hover:text-[#5570F1] transition-colors"
            >
              Help Center
            </a>
          </div>
          <div className="text-gray-600">
            © 2025 Certifysend. All rights reserved.
          </div>
        </div>
      </div>*/}
    </footer>
  );
};

export default Footer;