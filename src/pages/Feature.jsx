const features = [
    {
      title: "Automated Certificate Generation",
      description:
        "Say goodbye to manual processes! Our platform allows you to create and customize certificates in bulk, saving you time and reducing errors.",
      icon: "/img/feature1.png",
    },
    {
      title: "Seamless Email Delivery",
      description:
        "Instantly send certificates directly to recipients’ inboxes. Ensure that every participant receives their achievement promptly and professionally.",
      icon: "/img/feature2.png",
    },
    {
      title: "Registration Forms for Webinars",
      description:
        "Easily set up custom registration forms for your online webinars. Collect attendee information and manage registrations effortlessly.",
      icon: "/img/feature3.png",
    },
    {
      title: "Automated Emails & Reminders",
      description:
        "Keep your participants informed with automated confirmation emails and reminders for upcoming virtual sessions, ensuring high attendance rates.",
      icon: "/img/feature4.png",
    },
    {
      title: "Secure & Reliable",
      description:
        "Our platform ensures the highest level of security for your data and certificates, so you can trust that your information is safe.",
      icon: "/img/feature5.png",
    },
    {
      title: "Analytics & Tracking",
      description:
        "Monitor delivery status and engagement rates with built-in analytics, helping you understand how your certificates are received and track webinar attendance.",
      icon: "/img/feature6.png",
    },
  ];
  
  const FeaturesSection = () => {
    return (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Discover Powerful Features
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our platform is designed to simplify and enhance every step of your
              certification and webinar management journey. From automation to
              analytics, Certifysend empowers you to deliver excellence with ease.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-xl text-center flex flex-col items-center"
              >
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-medium text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };
  
  export default FeaturesSection;
  