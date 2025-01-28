import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Coordinator, LearnPro Academy",
      image: "/img/avatar1.png",
      rating: 4,
      quote: "The certification process has never been easier! Saved us hours of work and ensured every participant received their certificate seamlessly!"
    },
    {
      name: "Emily Nguyen",
      role: "Program Director, Webinars & Beyond",
      image: "/img/avatar2.png",
      rating: 4,
      quote: "Setting up webinars and sending automated reminders has drastically improved our attendance rates! Certifysend has transformed how we manage virtual events."
    },
    {
      name: "Priya Mehta",
      role: "HR Manager, GrowthEdge Ltd.",
      image: "/img/avatar3.png",
      rating: 4,
      quote: "Their support team is outstanding! They helped me troubleshoot an issue within minutes—absolutely top-notch service."
    },
    {
      name: "Priya Mehta",
      role: "HR Manager, GrowthEdge Ltd.",
      image: "/img/avatar4.png",
      rating: 4,
      quote: "Their support team is outstanding! They helped me troubleshoot an issue within minutes—absolutely top-notch service."
    },
    {
      name: "Priya Mehta",
      role: "HR Manager, GrowthEdge Ltd.",
      image: "/img/avatar5.png",
      rating: 4,
      quote: "Their support team is outstanding! They helped me troubleshoot an issue within minutes—absolutely top-notch service."
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-[#5570F1]' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#5570F1] font-semibold text-sm uppercase tracking-wide">
            Testimonials
          </h3>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3">
            What Our Clients Are Saying
          </h2>
          <p className="text-gray-600 mt-4">
            Need help with something? Here are our most frequently asked questions.
          </p>
        </div>

        <div className="flex space-x-6 overflow-x-auto pb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-[300px] bg-white rounded-lg p-6 shadow-sm"
            >
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="flex justify-center text-[#5570F1] font-semibold text-sm">
                — {testimonial.name}
              </h4>
              <p className="flex justify-center text-xs text-gray-600">
                {testimonial.role}
              </p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 text-sm mb-4 h-24 overflow-hidden">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;